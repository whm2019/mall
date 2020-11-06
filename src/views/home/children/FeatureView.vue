<template>
  <div class='feature'>
      <a href="http://act.mogujie.com/zzlx67">
        <img src="~assets/img/home/recommend_bg.jpg" alt="" @load='featureImgLoad'>
      </a>
  </div>
</template>

<script>
export default {
  methods:{
    featureImgLoad(){
      this.$emit('featureImgLoad')
    }
  }

}
</script>

<style scoped>
.feature img{
    width: 100%;
}
</style>