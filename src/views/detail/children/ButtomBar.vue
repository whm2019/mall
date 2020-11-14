<template>
  <div class='buttom-bar'>
    <div class='left'>
      <div class='buttom-bar-item'>
        <img src="~assets/img/detail/icon01.png" alt="">
        <div>客服</div>
      </div>
      <div class='buttom-bar-item'>
        <img src="~assets/img/detail/icon02.png" alt="">
        <div>店铺</div>
      </div>
      <div class='buttom-bar-item'>
        <img src="~assets/img/detail/icon03.png" alt="">
        <div>收藏</div>
      </div>
    </div>
    <div class='center'>
      加入购物车
    </div>
    <div class='right'>
      购买
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.buttom-bar{
  position: relative;
  display: flex;
  bottom: 0;
  right: 0;
  left: 0;

  height: 49px;
  text-align: center;
  background: #fff;
  box-shadow: 0 -1px 2px gray;
  font-weight: 500;

  z-index: 9;
}
.buttom-bar img{
  height: 24px;
  width: 24px;
}

.buttom-bar .left{
  flex: 2;
  display: flex;
}
.buttom-bar .left>div{
  flex: 1;
  padding: 2px 0;
}
.buttom-bar .center, .buttom-bar .right{
  flex: 1;
  line-height: 49px;
}

.center{
  background: yellowgreen;
}
.right{
  background: red;
  color: white;
}

</style>