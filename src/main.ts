import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

if (process.env.NODE_ENV === 'development') {
    require("./mockjs/mock.js")
}
createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
