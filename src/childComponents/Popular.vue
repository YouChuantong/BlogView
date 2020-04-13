<!--热推组件-->
<template>
  <card boxShadow opacity>
    <h3 class="title">最热：</h3>
    <div class="dline"></div>
    <div class="PushList">
      <div class="news">
        <div class="name">java中class和public class区别</div>
        <div class="tag">新</div>
      </div>
      <div class="Popular">
        <ul class="PopularList">
          <li
            class="item"
            v-for="(item, index) in PopularList"
            @click="toSeePage(index)"
            :key="index"
            @mouseenter.stop="HighlightHover($event, item.categoriesID)"
          >
            <div class="name">{{item.name}}</div>
            <div class="tag">{{index+1}}</div>
          </li>
        </ul>
      </div>
    </div>
  </card>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

import card from "@/components/card-component.vue";

@Component({
  components: {
    card
  }
})
export default class CPopular extends Vue {
  private PopularList: object[] = [
    { name: "java中class和public class区别", categoriesID: 1 },
    { name: "C#关键字", categoriesID: 4 },
    { name: "java数据类型", categoriesID: 1 },
    { name: "Javascript 爬虫", categoriesID: 6 }
  ];
  private categoriesID: object = {};
  private searchHover: object | undefined = {};

  private toSeePage(index: number) {
    const categoriesID = (this.PopularList[index] as any).categoriesID;
    (this.$parent as any).categoriesID = { categoriesID };
  }
  private HighlightHover(e: MouseEvent, id: number) {
    (this.$parent as any).searchHover = { categoriesID: id };
  }
}
</script>

<style scoped lang="scss">
.PushList {
  padding: 0 15px;
  line-height: 30px;

  .news {
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    .name {
      font-size: 14px;
      max-width: 170px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }

    .tag {
      font-size: 12px;
    }
  }

  .Popular {
    .PopularList {
      .item {
        cursor: pointer;
        display: flex;
        justify-content: space-between;

        .name {
          font-size: 14px;
          max-width: 170px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }

        .tag {
          font-size: 12px;
        }
      }
    }
  }
}
</style>