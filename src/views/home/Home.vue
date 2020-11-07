<template>
  <div id="home">
    <navi-bar class="home-nav">
      <div slot="center">购物街</div>
    </navi-bar>
    <tab-control
      :titles="['流行', '新款', '精选']"
      class="tab-control tabControl"
      :path="['/home/pop', '/category', '/home/choiced']"
      v-show="isTabShow"
      @tabClick1='tabClick'
      ref='tabControl1'
    >
    </tab-control>

    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pullUpLoad="true"
      @pullingUp="pullingUp"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view
        class="feature"
        @featureImgLoad="featureImgLoad"
      ></feature-view>
      <!-- tab-control组件一定要借助vue-router才能使home-test组件内容显示和改变吗？ -->
      <tab-control
        :titles="['流行', '新款', '精选']"
        class="tab-control"
        :path="['/home/pop', '/category', '/home/choiced']"
        ref="tabControl2"
        @tabClick1="tabClick"
      >
      </tab-control>
      <home-test :contents="datas"></home-test>
      <ul>
        <li>comming1...</li>
        <li>comming2...</li>
        <li>comming3...</li>
        <li>comming4...</li>
        <li>comming5...</li>
        <li>comming6...</li>
        <li>comming7...</li>
        <li>comming8...</li>
        <li>comming9...</li>
        <li>comming10...</li>
        <li>comming11...</li>
        <li>comming12...</li>
        <li>comming13...</li>
        <li>comming14...</li>
        <li>comming15...</li>
        <li>comming16...</li>
        <li>comming17...</li>
        <li>comming18...</li>
        <li>comming19...</li>
        <li>comming20...</li>
        <li>comming21...</li>
        <li>comming22...</li>
        <li>comming23...</li>
        <li>comming24...</li>
        <li>comming25...</li>
        <li>comming26...</li>
        <li>comming27...</li>
        <li>comming28...</li>
        <li>comming29...</li>
        <li>comming30...</li>
        <li>comming31...</li>
        <li>comming32...</li>
        <li>comming33...</li>
        <li>comming34...</li>
        <li>comming35...</li>
        <li>comming36...</li>
        <li>comming37...</li>
        <li>comming38...</li>
        <li>comming39...</li>
        <li>comming40...</li>
        <li>comming41...</li>
        <li>comming42...</li>
        <li>comming43...</li>
        <li>comming44...</li>
        <li>comming45...</li>
        <li>comming46...</li>
        <li>comming47...</li>
        <li>comming48...</li>
        <li>comming49...</li>
        <li>comming50...</li>
        <li>comming51...</li>
        <li>comming52...</li>
        <li>comming53...</li>
        <li>comming54...</li>
        <li>comming55...</li>
        <li>comming56...</li>
        <li>comming57...</li>
        <li>comming58...</li>
        <li>comming59...</li>
        <li>comming60...</li>
        <li>comming61...</li>
        <li>comming62...</li>
        <li>comming63...</li>
        <li>comming64...</li>
        <li>comming65...</li>
        <li>comming66...</li>
        <li>comming67...</li>
        <li>comming68...</li>
        <li>comming69...</li>
        <li>comming70...</li>
        <li>comming71...</li>
        <li>comming72...</li>
        <li>comming73...</li>
        <li>comming74...</li>
        <li>comming75...</li>
        <li>comming76...</li>
        <li>comming77...</li>
        <li>comming78...</li>
        <li>comming79...</li>
        <li>comming80...</li>
        <li>comming81...</li>
        <li>comming82...</li>
        <li>comming83...</li>
        <li>comming84...</li>
        <li>comming85...</li>
        <li>comming86...</li>
        <li>comming87...</li>
        <li>comming88...</li>
        <li>comming89...</li>
        <li>comming90...</li>
        <li>comming91...</li>
        <li>comming92...</li>
        <li>comming93...</li>
        <li>comming94...</li>
        <li>comming95...</li>
        <li>comming96...</li>
        <li>comming97...</li>
        <li>comming98...</li>
        <li>comming99...</li>
        <li>comming100...</li>
      </ul>
    </scroll>
    <back-top @click.native="backClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
import NaviBar from "components/common/navibar/NaviBar";
import TabControl from "components/content/tabcontrol/TabControl";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backtop/BackTop";
import test from "components/test";

import HomeSwiper from "./children/HomeSwiper";
import RecommendView from "./children/RecommendView";
import FeatureView from "./children/FeatureView";
import HomeTest from "./children/HomeTest";

import {
  getHomeMutidata,
  getHomeContent,
  getHomeIt,
  getHomeExp,
} from "network/home";

export default {
  data() {
    return {
      banners: [], //用来接收从服务器请求的数据
      recommends: [],
      contents: {
        first: [],
        second: [],
      },
      isShow: false,
      // {
      //   type: Boolean,
      //   default: false
      // }
      isTabShow: false,
      tabOffsetTop: Number,
      datas: [],
    };
  },
  components: {
    NaviBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    HomeTest,
    Scroll,
    BackTop,
    test,
  },
  created() {
    // getHomeMutidata().then((res) => {
    //   //请求数据并赋给banners, recommends
    //   console.log(res);
    //   this.banners = res.data.banners.list;
    //   this.recommends = res.data.recommends.list;
    // }),
    // alert(1);
    getHomeContent()
      .then((res) => {
        console.log(res);
        this.contents.first = res.data.data.list.list;
        this.datas = this.contents.first
      })
      .catch((err) => {
        console.log("failed!");
      });
    // getHomeIt().then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log('failed two')
    // })
    getHomeExp()
      .then((res) => {
        console.log(res);
        this.contents.second = res.data.result.data;
      })
      .catch((err) => {
        console.log("failed third");
      });
  },
  mounted() {
    //组件挂载到html页面之后
    // console.log(this.$refs.aaa.test);
    // console.log(this.$refs.bbb)
    // console.log(this)
    // const refresh = this.debounce(this.$refs.scroll.scroll.refresh, 300)
    this.$bus.$on("imgLoad", () => {
      this.$refs.scroll.scroll.refresh();
      // console.log(1)
    });
    // console.log(this.$refs.tabControl.currentIndex)
  },
  activated(){
    console.log('this is a activated happened')
  },
  deactivated(){
    console.log('this is a deactivated')
  },
  methods: {
    backClick() {
      // console.log(this.$refs.scroll)
      if (this.$refs.scroll.scroll)
        this.$refs.scroll.scroll.scrollTo(0, 0, 300);
    },
    contentScroll(position) {
      this.isShow = -position.y > 300;
      this.isTabShow = -position.y > this.tabOffsetTop;
    },
    pullingUp() {
      console.log(
        "使用better-scroll的pullingUp事件来监听当前页面是否加载到底部"
      );
    },
    featureImgLoad() {
      console.log(this.$refs.tabControl2.$el.offsetTop);
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    tabClick(index) {
      console.log(index);
      switch (index) {//再tabcontrol被点击后根据index来切换传入hometest里的数据
        case 0:
          this.datas = this.contents.first;
          break;
        case 1:
          break;
        case 2:
          this.datas = this.contents.second;
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;//解决两个tabControl组件active属性不一样的问题
    }
  },
};
</script>
<style scoped>
#home {
  /* vh这个单位表示适应窗口大小 */
  height: 100vh;
}
.home-nav {
  background: var(--color-tint);
  color: white;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
}
.tabControl {
  /* position:relative行不通 */
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  z-index: 99;
}
.feature {
  border-bottom: 10px solid #eee;
  /* padding-top: 44px; */
}
.tab-control {
  background: #fff;
}

.content {
  /* 为什么这里的高度减去49px是从底部减去49px？ */
  height: calc(100% - 93px);
  overflow-y: hidden;
  margin-top: 44px;
  /* position: absolute;
  top: 44px;
  left: 0;
  right: 0; */
}
</style>