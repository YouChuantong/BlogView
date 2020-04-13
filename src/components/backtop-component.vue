<template>
  <div class="backtop">TOP</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../style.scss";

$size: 50px;
$hoveSize: 52px;

.backtop {
  position: fixed;
  width: $size;
  height: $size;
  border-radius: 50%;
  line-height: 50px;
  text-align: center;
  right: $size;
  bottom: $size;
  overflow: hidden;
  cursor: pointer;
  transition: bottom 0.5s, width 0.5s, height 0.5s,
    background $SwitchThemeAnimationTime;
  color: $dark-stress-text-color;
  font-weight: bold;
  font-size: 16px;
  text-shadow: 0 2px 2px #000;

  &:hover {
    bottom: $hoveSize;
    width: $hoveSize;
    height: $hoveSize;
  }
}

.light {
  .backtop {
    background: $light-background;
    box-shadow: $light-box-shadow;
  }
}
.dark {
  .backtop {
    background: $dark-background-color;
    box-shadow: $light-box-shadow;
  }
}
</style>