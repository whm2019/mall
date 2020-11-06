<template>
  <!-- 如果这里把根div设置一个id，则该id会被home里的根div的id覆盖掉，并使这个组件里的样式失效！ -->
  <div class="navi-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center">sdfggf</slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navi-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
}
.navi-bar .left,
.navi-bar .right {
  width: 60px;
  background: red;
}
.center {
  flex: 1;
  text-align: center;
}
</style>