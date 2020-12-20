import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { i18n } from "./plugins/i18n";
import vSelect from "vue-select";
import MainLayoutOld from "@/components/old/layouts/Main";
import MainLayoutYoung from "@/components/young/layouts/Main";

Vue.component("v-select", vSelect);
Vue.component("main-layout-old", MainLayoutOld);
Vue.component("main-layout-young", MainLayoutYoung);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
