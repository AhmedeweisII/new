<!-- eslint-disable no-unused-vars -->
<template>
  <div>
    <router-view/>
  </div>
</template>

<script>

import { createApp } from 'vue';
import Toaster from '@meforma/vue-toaster';
import store from './store'; // Import your Vuex store
// eslint-disable-next-line import/no-self-import
import App from './App.vue';
import './axios';

const app = createApp(App);
app.use(store); // Use the Vuex store
app.config.globalProperties.baseUrl = 'https://www.mashrook.somee.com';

app.use(Toaster, {
  position: 'top-left', // Set the position to top-left
});

setTimeout(() => {
  app.config.globalProperties.$toast.clear();
}, 3000);

const toaster = app.config.globalProperties.$toast;

// Show a welcome message
toaster.show('اهلا بك في موقع مشروك');
export default app;

</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Cairo:wght@300;400&display=swap");
  @import "@/assets/css/normalize.css";
  @import "@/assets/css/framework.css";
  @import "@/assets/css/master.css";
  @import "@/assets/css/styles.css";
</style>
