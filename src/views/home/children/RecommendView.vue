<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.link">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        recommends:{
            type: Array,
            default(){
                return []
            }
        }
    }
};
</script>

<style>
</style>