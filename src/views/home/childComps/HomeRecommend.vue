<template>
<div class="homerecommend">
  <a  v-for="item in recommend" :href="item.link" class="recommend-item">
    <img :src="item.image" alt="">
    <div>{{item.title}}</div>
  </a>
</div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props:{
    recommend:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
.homerecommend{
  font-size: var(--font-size);
  display: flex;
  text-align: center;
  border-bottom: 8px solid #eee;
  padding-bottom: 10px;
}
.recommend-item {
  padding: 5px 15px 5px;
  flex: 1;
}
.recommend-item img{
  margin-bottom: 5px;
  width: 100%;
}
</style>
