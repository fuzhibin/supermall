<template>
  <nav-bar class="dtnav">
    <template v-slot:left>
      <div class="back" @click="backClic">
        <img src="~assets/img/common/back.svg" alt="" class="backimg">
      </div>
    </template>
    <template v-slot:center>
      <div class="detail-center">
          <span v-for="(item,index) in navbaritem"
                :class="{nactive:nowIndex===index}"
                @click="spClick(index)">{{item}}</span>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "DetailNavBar",
  data(){
    return {
      nowIndex:0,
      navbaritem:['商品','参数','评论','推荐']
    }
  },
  components:{
    NavBar
  },
  methods:{
    spClick(index){
      this.nowIndex=index
    },
    backClic(){
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.dtnav {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.detail-center {
  display: flex;
}
.detail-center span {
  flex: 1;
}
.back {
  width: 100%;
  height: 100%;
}
.backimg {
  margin-top: 15px;
}
.nactive {
  height: 44px;
  color: var(--color-tint);
  border-bottom: 2px solid var(--color-tint);
}
</style>
