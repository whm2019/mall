<template>
  <div id="app">
    <router-link to='/home'></router-link>
    <router-link to='/category'></router-link>
    <router-link to='/shopcart'></router-link>
    <router-link to='/profile'></router-link>
    <router-link to='/detail'></router-link>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
import NaviBar from 'components/common/navibar/NaviBar'

export default {
  components:{
    MainTabBar,
    NaviBar
  }
}
</script>

<style scoped>
@import 'assets/css/base.css'
</style>
