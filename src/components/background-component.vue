<template>
  <div class="background">
    <img
      :src="imgSrc"
      style="
      height: 100%;
      width: 100%;
      position: fixed;
    "
    />
    <div class="Content" style="">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
@Component
export default class Ybackground extends Vue {
  private imgSrc: any = require("../assets/background.jpeg");
}
</script>

<style lang="scss">
.background {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  height: 100%;
  transition: transform 0.3s;

  > .Content {
    transform: scale(0.8);
    animation-delay: 2s;
    -webkit-animation-delay: 2s;
    animation-fill-mode: forwards;
    animation: scaleChange 0.3s both;
  }
}

.dark {
  .background >img {
    opacity: 0;
  }
}

@keyframes scaleChange {
  100% {
    transform: scale(1);
  }
}
</style>