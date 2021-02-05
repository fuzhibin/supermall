import {debounce} from "@/common/utils";

export const imageLoad = {
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh,50)
    this.$bus.on('imageLoad',() =>{
      refresh()
    })
  }
}
