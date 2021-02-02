<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <better-scroll class="home-scroll"
                   :probe-type="3"
                   ref="scroll"
                   :pull-up-load="true"
                   @loadMore="loadMore"
                   @scrollpot="updateShow">
      <home-swiper :banners="banner"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature ></home-feature>
      <tab-control :tabtext="['流行','新款','精选']"
                   @tabCtlClc="tabCtlClc"></tab-control>
      <goods-list :goodlist="goods[goodstype].list"></goods-list>
    </better-scroll>
    <back-top v-show="isShow"
              @click.native="homeBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BetterScroll from "components/common/betterScroll/BetterScroll";
import BackTop from "components/content/backtop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import HomeFeature from "./childComps/HomeFeature";


import {getHomeMultiData,getHomeGoods} from "network/home";

export default {
  name: "Home",
  data(){
    return {
      isShow:false,
      goodstype:'pop',
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      }
    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    BetterScroll,
    BackTop
  },
  created() {
    this.getMultiData();
    /**
     * tabControl 数据
     */
    this.getGoodsData('pop');
    this.getGoodsData('new');
    this.getGoodsData('sell');
  },
  methods:{
    loadMore(){
      this.getGoodsData(this.goodstype)
    },
    homeBackTop(){
      this.$store.state.vuexScroll.scrollTo(0,0,500)
    },
    updateShow(position){
      this.isShow=(-position.y)>1000;
    },
    getMultiData(){
      getHomeMultiData().then(res => {
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;
        this.$store.commit('updateScroll',this.$refs.scroll);
      })
    },
    getGoodsData(type){
      let page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
        this.$store.state.vuexScroll.finishPullUp();
      })
    },
    tabCtlClc(index){
      switch (index){
        case 0:
          this.goodstype='pop';
          break;
        case 1:
          this.goodstype='new';
          break;
        case 2:
          this.goodstype='sell';
          break;
      }
    }
  }
}
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.home-navbar {
  background-color: var(--color-tint);
  font-size: var(--font-size);
  color: #fff;
}
.home-scroll {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top:44px;
  bottom: 49px;
}
</style>
