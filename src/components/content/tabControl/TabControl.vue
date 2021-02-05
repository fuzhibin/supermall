<template>
<div class="tabcontrol">
  <div class="tabcontrol-item"
       v-for="(item,index) in tabtext"
       @click="ctrClic(index)">
    <span :class="{ active: currentIndex===index }">{{item}}</span>
  </div>
</div>
</template>

<script>
export default {
name: "TabControl",
  data(){
  return{
    currentIndex:0
  }
  },
props:{
  tabtext:{
    type:Array,
    default(){return []}
    }
  },
  methods:{
    ctrClic(index){
      this.currentIndex=index;
      this.$emit('tabCtlClc',index);
    }
  }
}
</script>

<style scoped>
.tabcontrol {
  height: 40px;
  line-height: 40px;
  display: flex;
  background-color: #fff;
  z-index: 1;
}
.tabcontrol-item {
  flex: 1;
  text-align: center;
}
.tabcontrol-item span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
  border-bottom: 2px solid var(--color-high-text);
}
</style>
