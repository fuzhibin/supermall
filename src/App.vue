<template>
<div>
    <router-view v-slot="{ Component }">
      <keep-alive include="Home">
        <component :is="Component" />
      </keep-alive>
    </router-view>

  <main-tab-bar></main-tab-bar>
</div>
</template>

<script>

import MainTabBar from "components/content/mainTabBar/MainTabBar";
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "./assets/css/base.css";

</style>
