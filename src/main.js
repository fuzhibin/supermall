import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";

import mitt from "mitt"
const app=createApp(App)
app.use(router).mount('#app')
app.config.globalProperties.$bus= new mitt()
