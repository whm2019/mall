<template>
  <div class='home-test'>
      <div v-for='item in contents' :key='item.goods_id' class='home-test-item'>
          <img :src="item.img" alt="" @load="imgLoad">
          <div>{{item.goods_id}}</div>
          <!-- <div>{{item.goods_name + '' + '￥' + parseInt(item.goods_price).toFixed(2)}}</div> -->
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // test: 11
        }
    },
    props:{
        contents:{
            type: Array,
            default(){
                return []
            }
        }
    },
    methods:{
        imgLoad(){
            // console.log('pageload')
            // console.log(this.$parent)
            // this.$parent.scroll.refresh()
            // this.$emit('imgLoad')
            this.$bus.$emit('imgLoad')
        }
    }

}
</script>

<style scoped>
.home-test{
    text-align: center;
    display: flex;
    /* flex-wrap设为wrap 可以适应flex里的元素宽度换行 */
    flex-wrap: wrap;
    padding: 5px;
}
.home-test img{
    width: 100%;
    border-radius: 5px;
}
.home-test-item{
    width: 48%;
    margin: 3px;
}
.home-test-item div{
    padding: 3px;
}
</style>