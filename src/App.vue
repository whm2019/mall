<template>
  <div id="app">
    <router-link to='/home'></router-link>
    <router-link to='/category'></router-link>
    <router-link to='/shopcart'></router-link>
    <router-link to='/profile'></router-link>
    <router-view></router-view>
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

<style>
@import 'assets/css/base.css'
</style>
