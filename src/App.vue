<template>
  <div id="app" :class="[this.$store.state.$themeClass]">
  <!-- <div id="app" class="light"> -->
    <Ybackground>
      <router-view />
    </Ybackground>
  </div>
</template>
<script>
import Ybackground from "@/components/background-component.vue";
export default {
  components: {
    Ybackground
  }
};

// /usr/local/Cellar/mysql/8.0.19/bin/mysqld_safe  --user=mysql --basedir=/usr/local/Cellar/mysql/8.0.19/  --datadir=/usr/local/Cellar/mysql/8.0.19/data &
</script>
<style lang="scss">
@import "./style.scss";
#app {
  // height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
}
* {
  color: #676767;
  padding: 0;
  margin: 0;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
  font-family: "Courier";
  letter-spacing: 1px;
}
</style>
