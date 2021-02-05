<template>
  <div id="home">
    <nav-bar class="home-navbar">
      <template v-slot:center>
        <span>购物街</span>
      </template>
    </nav-bar>
    <tab-control :tabtext="['流行','新款','精选']"
                 @tabCtlClc="tabCtlClc"
                 :class="{tabctlfix:isFixed}"
                 ref="tabctl1"
                 v-show="isFixed"></tab-control>
    <better-scroll class="home-scroll"
                   :probe-type="3"
                   ref="scroll"
                   :pull-up-load="true"
                   @loadMore="loadMore"
                   @scrollpot="updateShow">
      <home-swiper :banners="banner"
                    @imgLoad="imgLoad"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <home-feature ></home-feature>
      <tab-control :tabtext="['流行','新款','精选']"
                   @tabCtlClc="tabCtlClc"
                   ref="tabctl2"></tab-control>
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
import {imageLoad} from "@/common/mixin";

export default {
  name: "Home",
  data(){
    return {
      nowPosition:0,
      isFixed:false,
      isShow:false,
      goodstype:'pop',
      banner:[],
      recommend:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      tabctlHeight:0
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
  activated() {
    this.$refs.scroll.scrollTo(0,-this.nowPosition,0)
  },
  deactivated() {
    this.nowPosition=-this.$refs.scroll.scroll.y;
  },
  mixins:[imageLoad],
  methods:{
    loadMore(){
      this.getGoodsData(this.goodstype);
      this.$refs.scroll.finishPullUp();
    },
    homeBackTop(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    updateShow(position){
      this.isShow=(-position.y)>1000;
      this.isFixed= (-position.y)>this.tabctlHeight+5
    },
    getMultiData(){
      getHomeMultiData().then(res => {
        this.banner=res.data.banner.list;
        this.recommend=res.data.recommend.list;

      })
    },
    getGoodsData(type){
      let page = this.goods[type].page + 1;
      getHomeGoods(type,page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page++;
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
      this.$refs.tabctl1.currentIndex=index
      this.$refs.tabctl2.currentIndex=index
    },
    imgLoad(){
      this.tabctlHeight=this.$refs.tabctl2.$el.offsetTop;
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
.tabctlfix  {
  position: fixed;
  height: 40px;
  line-height: 40px;
  left: 0;
  right: 0;
  top: 44px;
}
</style>
