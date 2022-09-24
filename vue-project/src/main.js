import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import LinkStore from "./store/link";

import "./assets/main.css";
import "./assets/scss/reset.scss";
import "./assets/scss/mixin.scss";
import "./assets/scss/variables.scss";

const app = createApp(App).use(LinkStore);

app.use(router);

app.mount("#app");
