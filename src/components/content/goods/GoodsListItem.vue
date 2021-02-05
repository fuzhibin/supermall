<template>
<div class="gooditem">
  <img :src="showImg" alt="" @load="imageLoad">
  <p>{{goodshow.title}}</p>
  <div><span class="price">{{goodshow.price}}</span><span class="collent">{{goodshow.cfav}}</span></div>
</div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodshow:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  computed:{
    showImg(){
      return this.goodshow.show ? this.goodshow.show.img : this.goodshow.image;
    }
  },
  methods:{
    imageLoad(){
      this.$bus.emit('imageLoad');
    }
  }
}
</script>

<style scoped>
.gooditem {
  width: 49%;
  padding: 0 4px;
  text-align: center;
}
.gooditem img {
  border-radius: 5px;
  width: 100%;
}
.gooditem p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.price {

  color: var(--color-tint);
}
.collent {
  position: relative;
  margin-left: 25px;
}
.collent::before {
  content: '';
  position: absolute;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") no-repeat center center;
  background-size: contain;
}
</style>
