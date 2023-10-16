import { createApp } from "vue";
import App from "./app.vue";
import sortable from "ivy-sortable";

const app = createApp(App);
app.use(sortable);
app.mount("#app");
