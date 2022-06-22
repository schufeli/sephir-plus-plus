import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import "./index.css";
import router from './router/router';

createApp(App).use(router).use(createPinia()).mount('#app');
