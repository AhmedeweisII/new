<!-- eslint-disable max-len -->
<template>
  <section class="additions-links">
    <div class="container">
      <routerLink to="/PaymentGetWays" class="addition-link">
        <div class="link-info">
          <img src="../../assets/imgs/credit-card.png" class="small-img" alt="">
          <span class="link-span">بطاقة الدفع</span>
        </div>
        <img src="../../assets/imgs/left.arr.png" class="small-img" alt="">
      </routerLink>

      <routerLink to="/Favorate" class="addition-link">
        <div class="link-info">
          <img src="../../assets/imgs/heart.png" class="small-img" alt="">
          <span class="link-span">مفضلتي</span>
        </div>
        <img src="../../assets/imgs/left.arr.png" class="small-img" alt="">
      </routerLink>

      <!-- <routerLink to="" class="addition-link">
        <div class="link-info">
          <img src="../../assets/imgs/agent.png" class="small-img" alt="">
          <span class="link-span">الوسطاء العقاريين</span>
        </div>
        <img src="../../assets/imgs/left.arr.png" class="small-img" alt="">
      </routerLink> -->

      <routerLink to="/HelpSupportView" class="addition-link">
        <div class="link-info">
          <img src="../../assets/imgs/customer-service.png" class="small-img" alt="">
          <span class="link-span"> تواصل معنا</span>
        </div>
        <img src="../../assets/imgs/left.arr.png" class="small-img" alt="">
      </routerLink>

      <routerLink to="/FQA" class="addition-link">
        <div class="link-info">
          <img src="../../assets/imgs/faq.png" class="small-img" alt="">
          <span class="link-span">الأسئلة الأكثر شيوعا</span>
        </div>
        <img src="../../assets/imgs/left.arr.png" class="small-img" alt="">
      </routerLink>

      <button class="addition-link-logout" @click="copyUrl('http://localhost:8080/signup')">
        <div class="link-info">
          <img src="../../assets/imgs/shareing.png" class="small-img" alt="">
          <span class="link-span">شارك الموقع</span>
        </div>
        <img src="../../assets/imgs/left.arr.png" class="small-img" alt="">
      </button>

      <button class="addition-link-logout" @click="logout">
        <div class="link-info">
          <img src="../../assets/imgs/logout.png" class="small-img" alt="">
          <span class="link-span">تسجيل الخروج</span>
        </div>
        <!-- <img src="../../assets/imgs/logout.png" class="small-img" alt=""> -->
      </button>
    </div>
  </section>

</template>

<script>
// import axios from 'axios';
import { createToaster } from '@meforma/vue-toaster';

export default {
  name: 'AdditionLinks',
  async beforeRouteEnter(to, from, next) {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      next('/login'); // Redirect to login if not logged in
    } else {
      next();
    }
  },
  async created() {
    try {
      const accessToken = localStorage.getItem('access_token');
      const user = JSON.parse(localStorage.getItem('user'));
      console.log('Access Token:', accessToken);
      console.log('User Data:', user);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  },
  methods: {
    async logout() {
      localStorage.removeItem('access_token');
      localStorage.removeItem('user');
      localStorage.removeItem('userId');
      localStorage.removeItem('email');

      // Push to login and prevent navigation back
      this.$router.replace('/login');
    },
    copyUrl(urlToCopy) {
      const input = document.createElement('input');
      input.value = urlToCopy;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);

      // Provide feedback to the user (you can use a notification library or show a message)
      const toaster = createToaster();
      toaster.success(' تم نسخ رابط الموقع ', {
      });
    },
  },
};
</script>
