<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
name: "Tabbar"
}
</script>

<style scoped>
.tabbar {
  height: 49px;
  background-color: #fff;
  box-shadow: 0 -2px 2px rgba(0,0,0,.1);
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom:0;

}

</style>
