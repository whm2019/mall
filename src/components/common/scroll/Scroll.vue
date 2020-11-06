<!-- 对better-scroll进行封装后使用-->
<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:"Scroll",
    props:{
        probeType:{
            type:Number,
            default:0
        },
        pullUpLoad:{
            type:Boolean,
            default:false
        }
    },
    data() {
        return {
            scroll:null
        }
    },
    mounted() {
        //1.创建BScroll 对象
        this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            probeType: this.probeType,
            pullUpLoad: this.pullUpLoad
        })
        //2.监听滚动的位置
        this.scroll.on('scroll',(position) => {
            // console.log(position);
            this.$emit('scroll',position)
        })
        //3.监听scroll滚动到底部
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',() =>{
                this.$emit('pullingUp')
                // console.log('通过监听better-scroll的pullingUp事件来判断页面是否拉到了底部')
            })
        }
    },
    methods: {
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        }
    },
}
</script>

<style scoped>
.wrapper{
    position: relative;
}
</style>