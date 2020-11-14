<template>
  <div class="cart-buttom">
    <div class="left">
      <img src="~assets/img/detail/check_active.png" alt="" />
      <div>全选</div>
    </div>
    <div class="center">
      <p>合计：￥231</p>
    </div>
    <div class="right">去结算(0)</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cart-buttom {
  display: flex;
  position: relative;
  /* bottom: 40px; */
  left: 0;
  right: 0;

  height: 40px;
  line-height: 40px;
  background: #f6f6f6;
  text-align: center;
}
.left {
  width: 70px;
  display: flex;
}
.left img {
  width: 24px;
  height: 24px;
  margin-top: 6px;
  margin-right: 3px;
  /* vertical-align: middle; */
}
.center {
  flex: 1;
  text-align: left;
}
.right {
  width: 90px;
  background: red;
  color: white;
}
</style>