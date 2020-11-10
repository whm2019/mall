<template>
  <div class='tab-control'>
      <div v-for='(item, index) in titles' :key='item' class='tab-control-item' 
      :class='{active: (index === currentIndex)}' @click='itemClick(item,index)'>
          <span @click='titleClick(index)'>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        titles:{
            type: Array,
            default(){
                return []
            }
        },
        path: {
            type: Array,
            default(){
                return []
            }
        }
    },
    data(){
        return {
            currentIndex: 0
        }
    },
    methods:{
        itemClick(item,index){
            // console.log(index + item)//这里面index从0开始
            let n;
            // for(n in 3){//这个循环无法打印
                           //用in 这种方式行不通，用初值；终值；++这种循环可以
            //     console.log('begin!')
            //     console.log(n)
            // }
            this.currentIndex = index;
            this.$emit('tabClick', index)
        },
        titleClick(index){
            this.$router.push(this.path[index]).catch(err => {err})
        }
    }

}
</script>

<style>
.tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
}
.tab-control-item{
    flex: 1;
}
.active{
    color: red;
}
.tab-control-item span{
    /* padding设置为三既可以和border-bottom拉开距离，也可以使border-bottom比span内容更长 */
    padding: 3px;
}
.active span{
    border-bottom: 2px solid red;
}

</style>