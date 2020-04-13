<template>
  <span class="switch disable" v-if="disable"></span>
  <span
    class="switch"
    @click="onORoff"
    @transitionend.stop="SendEmit"
    :class="[{cursor: cursor && !disable, disable: disable, enable}]"
    v-else
  ></span>
</template>

<script lang="ts">
import { Vue, Emit, Component, Prop } from "vue-property-decorator";

@Component
export default class Yswitch extends Vue {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  @Emit("click") private emitClickEvent(s: string) {}

  @Prop() private cursor?: string;
  @Prop(Boolean) private disable: boolean | undefined;
  @Prop(Boolean || String) private checked?: boolean | string;

  private time?: number;
  private enable?: boolean = false;
  private M: boolean | undefined = false;

  private onORoff() {
    // 防抖处理
    if (this.time) clearTimeout(this.time);
    this.time = setTimeout(() => {
      if (this.enable) {
        this.enable = false;
      } else {
        this.enable = true;
      }
    }, 200);
  }
  private SendEmit(event: Event) {
    if (this.M) {
      this.M = false;
      return;
    }
    const obj: any = {
      el: event.target,
      static: "off"
    };
    if (this.enable) {
      obj.static = "on";
    } else {
      obj.static = "off";
    }
    this.emitClickEvent(obj);
  }
  mounted() {
    if (this.checked) {
      this.M = true;
      this.onORoff();
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../style.scss";

.switch {
  width: 26px;
  height: 16px;
  border-radius: 16px;
  background-color: $switch-background-color;
  // $switch-background-color
  box-sizing: border-box;
  padding: 2px;
  display: inline-block;

  &.cursor {
    cursor: pointer;
  }
  &.enable,
  &.disable {
    user-select: none;
    padding: 2px;
    width: 26px;
    border-radius: 8px;
  }
  &.enable {
    background-color: $switch-background-color-checked;
  }
  &.disable {
    cursor: not-allowed;
    background-color: $switch-background-color-disable;

    &::after {
      background-color: $switch-background-disable;
    }
  }

  &::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #676767;
    // transition-property: background-color transform;
    transition: transform $ThemeThemeAnimationTime;
  }
  &.enable::after {
    background-color: $switch-background-checked;
    transform: translateX(10px);
  }
}
</style>