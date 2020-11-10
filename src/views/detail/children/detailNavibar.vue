<template>
      <navi-bar class='navi-bar'>
          <div slot='left' class='back'>
              <img src="~assets/img/back/Back.png" alt="">
          </div>
          <div slot='center' class='title'>
              <span v-for='(item, index) in titles' 
              :key='item' 
              @click='itemClick(index)'
              :class='{active:(currentIndex === index)}'>{{item}}</span>
          </div>
      </navi-bar>
</template>

<script>
import NaviBar from 'components/common/navibar/NaviBar'
export default {
    data(){
        return {
            titles:['first', 'second', 'third', 'fourth'],
            currentIndex: 0
        }
    },
    components:{
        NaviBar
    },
    methods:{
        itemClick(index){
            // console.log(index)
            this.$emit('itemClick', index);
            this.currentIndex = index;
        }
    }


}
</script>

<style scoped>
.navi-bar{
    background: var(--color-tint);
}
.back{
    height: 44px;
    box-sizing: border-box;
    padding-top: 5px;
    text-align: center;
}
.back img{
    width: 24px;
    height: 24px;
}
.title{
    display: flex;
    color: white;
}
.title span{
    flex: 1;
    text-align: center;
}
.active {
    border-bottom: 2px solid blue;
    padding: 0 3px;
    color: blue;
}
</style>