<template>
  <card boxShadow opacity style="margin-top: 0;">
    <div class="portrait">
      <div class="image" :style="`background-image: url(${image})`" :title="name"></div>
      <div class="name" :title="name">{{name}}</div>
      <div class="verse" :title="verse">{{verse}}</div>
    </div>
  </card>
</template>
<script lang="ts">
import card from "@/components/card-component.vue";

import { Vue, Component } from "vue-property-decorator";

@Component({
  components: {
    card
  }
})
export default class Cportrait extends Vue {
  private verse:
    | string
    | undefined = `「时间会淡化一个人的记忆，却永远无法让人淡忘那些回忆。」`;
  private name: string | undefined = "UpYou";
  private image: string | undefined = require("../assets/WechatIMG1.jpeg");
}
</script>
<style lang="scss" scoped>
@import "../style.scss";
.portrait {
  // box-sizing: border-box;
  padding-top: 60px;
  padding-bottom: 48px;
  text-align: center;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -khtml-user-select: none; /* Konqueror */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  .image {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    display: inline-block;
    background: $switch-background-checked;
    cursor: pointer;
    overflow: hidden;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .name {
    text-align: center;
    font-size: $nameFont-size;
    padding: 20px 0;
    cursor: text;
    font-weight: bold;
    color: $nameFont-color;
  }

  .verse {
    font-size: $verseFont-size;
    color: $verseFont-color;
  }
}
</style>