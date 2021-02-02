<template>
<div class="backtop">
  <img src="~assets/img/common/top.png" alt="">
</div>
</template>

<script>
export default {
name: "BackTop"
}
</script>

<style scoped>
.backtop {
  position: absolute;
  right: 10px;
  bottom: 50px;
  z-index: 11;
}
.backtop img{
  width: 50px;
  height: 50px;
}
</style>
