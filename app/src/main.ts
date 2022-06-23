import { createApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPersist from 'pinia-plugin-persist'
import App from './App.vue';
import "./index.css";
import router from './router/router';

createApp(App)
    .use(router)
    .use(createPinia().use(piniaPersist))
    .mount('#app');
