<template>
  <swiper class="detailswiper">
    <swiper-item v-for="item in imgInfo">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>

</template>

<script>
import Swiper from "components/common/swiper/Swiper";
import SwiperItem from "components/common/swiper/SwiperItem";
export default {
  name: "DetailSwiper",
  props:{
    imgInfo:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.detailswiper {
  height: 300px;
}
</style>
