<template>
<div class="swapper" ref="swapper" >
  <div class="content">
    <slot></slot>
  </div>
</div>
</template>

<script>
import BtScroll from '@better-scroll/core'
import Pullup from '@better-scroll/pull-up'
BtScroll.use(Pullup)
export default {
  name: "BetterScroll",
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
  data(){
    return {
      scroll:null,
    }
  },
  mounted() {
    this.scroll=new BtScroll(this.$refs.swapper,{
      pullUpLoad: this.pullUpLoad,
      probeType:this.probeType,
      click:true
    });
    this.scroll.on('scroll',(position) => {
      this.$emit('scrollpot',position);
    })
    this.scroll.on('pullingUp',()=>{
      this.$emit('loadMore')

    })
  },
  methods:{
    refresh(){
      this.scroll.refresh();
    },
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time);
    },
    finishPullUp(){
      this.scroll.finishPullUp();
    }
  }
}
</script>

<style>

</style>
