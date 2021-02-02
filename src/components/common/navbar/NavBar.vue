<template>
  <div class="navbar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
.navbar {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.left,
.right{
  width: 44px;
  height: 100%;
}
.center {
  flex: 1;
}
</style>
