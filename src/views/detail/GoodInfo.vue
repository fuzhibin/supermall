<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <better-scroll ref="scroll"
                   :probe-type="3"
                   :pull-up-load="true"
                   @loadMore="loadMore"
                    class="btscroll">
      <detail-swiper :img-info="detailSwiper"></detail-swiper>
      <detail-base-info :goods="detailBaseInfo"></detail-base-info>
      <detail-shop-info :shop="shopInfo"></detail-shop-info>
      <detail-goods-info :detailInfo="detailInfo"
                          @imageLoad="imageLoad"></detail-goods-info>
      <detail-param-info :paramInfo="paramInfo"></detail-param-info>
      <detail-comment :comment-info="commentInfo"></detail-comment>
      <goods-list :goodlist="recomendInfo.list"></goods-list>

    </better-scroll>
  </div>

</template>

<script>
import {getGoodInfo,getRecommend,Goods,Shop,GoodsParam} from "@/network/detail";

import DetailSwiper from "views/detail/childComps/DetailSwiper";
import DetailBaseInfo from "views/detail/childComps/DetailBaseInfo";
import DetailNavBar from "@/views/detail/childComps/DetailNavBar";
import DetailShopInfo from "@/views/detail/childComps/DetailShopInfo";
import DetailParamInfo from "@/views/detail/childComps/DetailParamInfo";
import DetailGoodsInfo from "@/views/detail/childComps/DetailGoodsInfo";
import BetterScroll from "@/components/common/betterScroll/BetterScroll";
import GoodsList from "@/components/content/goods/GoodsList";


import DetailComment from "views/detail/childComps/DetailComment";
import {imageLoad} from "@/common/mixin";
export default {
name: "GoodInfo",
  data(){
    return {
      goodId:this.$route.params.goodId,
      detailSwiper:[],
      detailBaseInfo:{},
      shopInfo:{},
      paramInfo: {},
      detailInfo:[],
      recomendInfo:{
        page:0,
        list:[]
      },
      commentInfo: {}
    }
  },
  components:{
    DetailComment,
    GoodsList,
    BetterScroll,
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailParamInfo,
    DetailGoodsInfo
  },
  created() {
    getGoodInfo(this.goodId).then(res => {
      let data=res.result;
      this.detailSwiper=data.itemInfo.topImages;
      this.detailBaseInfo=new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shopInfo= new Shop(data.shopInfo)
      this.detailInfo=data.detailInfo;
      this.paramInfo = new GoodsParam (data.itemParams.info, data.itemParams.rule);
      this.commentInfo=data.rate.list[0];
      console.log(this.commentInfo);
    })
    this.getRecomendInfo()
  },
  mixins:[imageLoad],
  methods:{
    imageLoad(){
      this.$refs.scroll.refresh();
    },
    getRecomendInfo(){
      getRecommend(++this.recomendInfo.page).then(res => {
        console.log(res.data.list);
        this.recomendInfo.list.push(...res.data.list);
        this.$refs.scroll.finishPullUp();
      })
    },
    loadMore(){
      this.getRecomendInfo();
    }
  }
}
</script>

<style scoped>
.detail {
  height: 100vh;
  position: relative;
  z-index: 1;
}
.btscroll {
  overflow: hidden;
  position: absolute;
  left: 0;
  right: 0;
  top:44px;
  bottom: 49px;
}
</style>
