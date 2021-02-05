<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <a :href="item.link"><img :src="item.image" alt="" @load="imgLoad"></a>
    </swiper-item>
  </swiper>
</template>

<script>
import {
  Swiper, SwiperItem
} from 'components/common/swiper/index'
export default {
  name: "HomeSwiper",
  data(){
    return {
      isSend:false
    }
  },
  props:{
    banners:{
      type:Array,
      default(){}
    }
  },
  components:{
    Swiper, SwiperItem
  },
  methods:{
    imgLoad(){
      if(!this.isSend){
        this.$emit('imgLoad');
        this.isSend=true
      }
    }
  }
}
</script>

<style scoped>

</style>
