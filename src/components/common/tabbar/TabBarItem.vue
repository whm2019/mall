<template>
    <div class="tab-bar-item" @click="itemClick">
        <!-- <img src="../../assets/img/tabbar/home.svg" alt="">
        <div>首页</div> -->
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div>
            <slot name="item-text"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:"TabBarItem",
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'red'
        }
    },
    data() {
        return {
            // isClick:true
        }
    },
    computed: {
        isActive(){
          return this.$route.path.indexOf(this.path) !== -1
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor} : {}
        }
    },
    methods: {
        itemClick(){
            this.$router.replace(this.path).catch(err => err)
        }
    },
}
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
  }
  .tab-bar-item img{
    margin-top: 6px;
    width: 24px;
    height: 24px;
    vertical-align: middle;
    margin-bottom: 0px;
  }

</style>