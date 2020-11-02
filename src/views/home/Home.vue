<template>
  <div id="home">
    <navi-bar class="home-nav">
      <div slot="center">购物街</div>
    </navi-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行', '新款', '精选']" class='tab-control'></tab-control>

    <ul>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
      <li>coming...</li>
    </ul>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
import TabControl from 'components/content/tabcontrol/TabControl'

import HomeSwiper from "./children/HomeSwiper";
import RecommendView from "./children/RecommendView";
import FeatureView from './children/FeatureView'

import { getHomeMutidata } from "network/home";

export default {
  data() {
    return {
      banners: [], //用来接收从服务器请求的数据
      recommends: [],
    };
  },
  components: {
    NaviBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl
  },
  create() {
    getHomeMutidata().then((res) => {
      //请求数据并赋给banners, recommends
      console.log(res);
      this.banners = res.data.banners.list;
      this.recommends = res.data.recommends.list;
    });
  },
};
</script>
<style>
.home-nav {
  background: var(--color-tint);
  color: white;

  position: fixed;
  top: 0;
  left: 0; 
  right: 0;
}
.tab-control{
  background: #fff;
  position: sticky;
  top: 44px;
}
</style>