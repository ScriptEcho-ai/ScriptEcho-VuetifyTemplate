import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import router from "./router/index.js";

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
  },
});
console.log('vuetify', vuetify)

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount("#app");
