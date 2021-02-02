<template>
  <div class="tabbaritem" @click="isSelect">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="isActive?{color:textColor}:{}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path:String,
    textColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {

    }
  },
  computed:{
    isActive(){
      return this.$route.path.indexOf(this.path) != -1;
    }
  },
  methods:{
    isSelect(){
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
.tabbaritem {
  flex: 1;
  text-align: center;
}
.tabbaritem img {
  width: 24px;
  height: 24px;
  margin-top: 2px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
