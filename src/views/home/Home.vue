<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <home-swiper :banners="banner"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <home-feature ></home-feature>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li>10</li>
    </ul>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";

import {getHomeMultiData} from "network/home";

export default {
  name: "Home",
  data(){
    return {
      banner:[],
      recommend:[]
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature
  },
  created() {
    getHomeMultiData().then(res=>{

      this.banner=res.data.banner.list;
      this.recommend=res.data.recommend.list;
      console.log(this.recommend)
    })
  }
}
</script>

<style scoped>
.home-navbar {
  background-color: var(--color-tint);
  font-size: var(--font-size);
  color: #fff;
}
</style>
