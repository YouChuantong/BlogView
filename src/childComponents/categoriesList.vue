<template>
  <card boxShadow opacity>
    <h3 class="title">分类：</h3>
    <div class="dline"></div>
    <div
      class="categories"
      @mouseenter.stop="ChangeHighlightHoveStatic(true)"
      @mouseleave.stop="ChangeHighlightHoveStatic(false)"
    >
      <i class="Highlight" :style="{top: HighlightTop + 'px'}"></i>
      <i
        class="Highlight HighlightHove"
        :style="{top: HighlightHoveTop + 'px', opacity: HighlightHoveStatic }"
      ></i>
      <ul class="categoriesList">
        <li
          class="categoriesInfo"
          @mouseenter.stop="HighlightHover"
          @click="toCategoriesPage"
          v-for="(item, i) in categoriesList"
          :key="i"
          :ref="`categoriesList${item.categoriesID}` "
        >
          <div class="name">{{item.name}}</div>
          <div class="count">{{item.count}}</div>
        </li>
      </ul>
    </div>
  </card>
</template>
<script lang="ts">
// @ is an alias to /src
import Vue from "vue";
import { Component, Prop, Emit, Watch, Model } from "vue-property-decorator";

import card from "@/components/card-component.vue";
import { gsap } from "gsap";

@Component({
  components: {
    card
  }
})
export default class Ccategories extends Vue {
  @Prop(Object) private search?: object;
  @Prop(Object) private Hover?: object;

  @Watch("search", { deep: true })
  searchObject(obj: any) {
    for (const keys in obj) {
      const val = (obj as any)[keys];
      this.FindCategories(keys, val);
      break;
    }
  }

  @Watch("Hover")
  HoverList(obj: object) {
    // this.HighlightHover((obj as any).e)
    this.ChangeHighlightHoveStatic(true);
    if (this.HoverTime) clearTimeout(this.HoverTime); // 移除上一个定时器
    const top =
      (this.$refs[`categoriesList${(obj as any).categoriesID}`] as any)[0]
        .offsetTop + 10; // 计算高亮光标位置
    gsap.to(this.$data, {
      duration: 0.5,
      HighlightHoveTop: top
    });
    // 设置消失时间
    this.HoverTime = setTimeout(() => {
      // 设置光标状态
      this.ChangeHighlightHoveStatic(false);
    }, 1000);
  }

  // 文章列表模拟数据
  private categoriesList: object[] = [
    { name: "Java", count: "99+", categoriesID: 1 },
    { name: "PHP", count: "99+", categoriesID: 2 },
    { name: "Node", count: "99+", categoriesID: 3 },
    { name: "C#", count: "99+", categoriesID: 4 },
    { name: "C/C++", count: "99+", categoriesID: 5 },
    { name: "Javascript", count: "99+", categoriesID: 6 },
    { name: "HTML", count: "99+", categoriesID: 7 },
    { name: "Css", count: "99+", categoriesID: 8 },
    { name: "Java", count: "99+", categoriesID: 9 }
  ];

  private HoverTime: number | undefined; // 可移动的高亮点防抖函数,防止消失
  private HighlightHoveTop?: number = 10; // 可移动的高亮点
  private HighlightTop?: number = 10; // 选中高亮点
  private HighlightHoveStatic?: number = 0; // 鼠标是否移入

  // 鼠标移入时随光标移动
  private HighlightHover(e: MouseEvent) {
    // 如果前一次设置了这个防抖，取消
    if (this.HoverTime) clearTimeout(this.HoverTime);
    gsap.to(this.$data, {
      duration: 0.5,
      HighlightHoveTop: (e.currentTarget as any).offsetTop + 10
    });
  }
  // 当前选中位置
  private toCategoriesPage(e: MouseEvent) {
    gsap.to(this.$data, {
      duration: 0.5,
      HighlightTop: (e.currentTarget as any).offsetTop + 10
    });
  }
  private ChangeHighlightHoveStatic(s: boolean) {
    gsap.to(this.$data, {
      duration: 0.5,
      HighlightHoveStatic: s ? 1 : 0
    });
  }
  private FindCategories(key: string, val: any) {
    this.categoriesList.forEach((item, index) => {
      if ((item as any)[key] === val) {
        const top =
          (this as any).$refs[`categoriesList${val}`][0].offsetTop + 10;
        gsap.to(this.$data, {
          duration: 0.5,
          HighlightTop: top
        });
        return;
      }
    });
  }
}
</script>

<style scoped lang="scss">
@import "../style.scss";

.categories {
  padding: 0 15px;
  position: relative;
  max-height: 180px;
  overflow: auto;
  user-select: none;

  .Highlight {
    position: absolute;
    height: 10px;
    width: 3px;
    background-color: $switch-background-checked;
    right: 0;
    top: 10px;
  }

  .categoriesList {
    line-height: 30px;

    .categoriesInfo {
      display: flex;
      justify-content: space-between;
      border-radius: 4px;
      cursor: pointer;
      list-style-type: disc;
    }

    .name {
      font-size: 14px;
    }
    .count {
      font-size: 12px;
    }
  }
}
</style>