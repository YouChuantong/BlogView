<template>
  <div class="crad" :class="[ {boxShadow:boxShadow, opacity: opacity}]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';

@Component
export default class Ycrad extends Vue{
  @Prop(Boolean) private boxShadow: boolean | undefined;
  // @Prop({
  //   required: false,
  //   type: String
  // }) private class: string | undefined;
  @Prop(Boolean) private opacity: boolean | undefined;
}
</script>
<style lang="scss" scoped>
@import "../style.scss";

.crad {
  transition: background 1s;
  padding: 8px;
  border-radius: 4px;
  width: 100%;
  display: block;
  height: auto;
  margin: auto;
  margin: 4px auto;
  position: relative;
  box-sizing: border-box;
}

.light {
  .crad {
    background: $light-background;

    &.boxShadow {
      box-shadow: $light-box-shadow;
    }

    &.opacity {
      background: $light-background-opacity;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }
}

.dark {
  .crad {
    background: $dark-background-color;
    color: $dark-text-color;

    &.boxShadow {
      box-shadow: $dark-box-shadow;
    }

    &.opacity {
      background: $dark-background-opacity;
      -webkit-backdrop-filter: blur(10px);
      backdrop-filter: blur(10px);
    }
  }
}
</style>