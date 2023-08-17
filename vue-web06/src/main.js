import { createApp } from 'vue'
import App from './App.vue'

// import MButton from './components/base/MButton.vue';
import MLoading from './components/base/MLoading.vue';

import format from './helper/format.js';
import commonJS from './helper/common.js';
import MEnum from './helper/enum.js';
import MFormAction from './helper/formAction.js';
import MResource from './helper/resource.js';

import router from './router/router';
import emitter from 'tiny-emitter/instance';
import axios from 'axios'

const app = createApp(App)

app.component("MLoading", MLoading);

app.config.globalProperties.$format = format;
app.config.globalProperties.$commonJS = commonJS;
app.config.globalProperties.$enum = MEnum;
app.config.globalProperties.$formAction = MFormAction;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$resource = MResource;


app.config.globalProperties.$emitter = emitter;

app.use(router);

// app.component('MButton',MButton);

app.mount('#app')
