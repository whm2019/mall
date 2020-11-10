<template>
  <swiper>
    <swiper-item v-for="item in banners" :key='item.img'>
      <a :href="item.link">
        <img :src='item.img' alt="" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  props: {
    banners: {
      type: Array,
      default() {//为什么这里是函数？
        return [];
      },
    },
  },
  components: {
    Swiper,
    SwiperItem,
  }
};
</script>

<style>
</style>