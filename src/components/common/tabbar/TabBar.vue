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
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom:0;

}

</style>
