<template>
  <navi-bar>
    <div slot="center">购物车()</div>
  </navi-bar>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
export default {
  components: {
    NaviBar,
  },
};
</script>

<style scoped>
div {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  background: var(--color-tint);
  font-size: var(--font-size);
  color: white;

  line-height: 44px;
}
</style>