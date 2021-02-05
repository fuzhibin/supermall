<template>
  <div class="goodslist">
    <goods-list-item v-for="item in goodlist"
                     :goodshow="item"
                      @click.native="gooditem(item.iid)"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props:{
    goodlist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components:{
    GoodsListItem
  },
  methods:{
    gooditem(goodId){
      this.$router.push('/goodInfo/'+goodId)
    }
  }
}
</script>

<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 5px;
  padding: 0 2px;
}

</style>
