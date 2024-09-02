<!-- eslint-disable vuejs-accessibility/heading-has-content -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <section>
    <div class="container">
      <!-- Bottom Navigation Bar -->
      <nav class="bottom-nav">

        <router-link to=""  @click="showLoginToast()">
          <a class="nav-link">
            <img src="../assets/imgs/home.png" class="nav-bar-img ">
            <h3 class="bottom-nav-word"> الرئيسية</h3>
          </a>
        </router-link>

        <router-link  to=""  @click="showLoginToast()">
          <a href="myrequests.html" class="nav-link ">
            <img src="../assets/imgs/doc.png" class="nav-bar-img ">
            <h3 class="bottom-nav-word ">شراكاتي</h3>
          </a>
        </router-link>

        <router-link to=""  @click="showLoginToast()">
          <a class="nav-link">
            <img src="../assets/imgs/add.png" class="nav-bar-img active-bottom-link">
            <h3 class="bottom-nav-word"></h3>
          </a>
        </router-link>

        <router-link  to=""  @click="showLoginToast()">
          <a class="nav-link">
            <img src="../assets/imgs/chat-box.png" class="nav-bar-img">
            <h3 class="bottom-nav-word">محادثة</h3>
          </a>
        </router-link>

        <router-link to=""  @click="showLoginToast()">
          <a class="nav-link">
            <img src="../assets/imgs/applications.png" class="nav-bar-img">
            <h3 class="bottom-nav-word">المزيد</h3>
          </a>
        </router-link>
      </nav>

    </div>
  </section>
</template>

<script>
import { createToaster } from '@meforma/vue-toaster';

export default {
  name: 'fackBottomNav',
  methods: {
    showLoginToast() {
      // Show the toast message indicating that the user needs to log in
      const toaster = createToaster();
      toaster.error('يجب عليك تسجيل حساب أو تسجيل الدخول أولاً', { position: 'top-left' });
    },
  },
};
</script>
