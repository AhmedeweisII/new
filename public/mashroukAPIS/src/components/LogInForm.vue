<!-- eslint-disable max-len -->
<!-- eslint-disable linebreak-style -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section class="sign-body">
    <div class="container">
      <form class="form-bod" @submit.prevent="handleSubmit">
        <h2 class="header-title c-h">تسجيل الدخول</h2>
        <div class="cell">
          <label for="email">البريد الإلكتروني</label>
          <input type="email" v-model="email" name="email" class="cell-entery" placeholder="البريد الإلكتروني" required>
        </div>
        <div class="cell">
          <label for="password">كلمة المرور</label>
          <input type="password" v-model="password" name="password" class="cell-entery" placeholder="كلمة المرور"
            required>
        </div>
        <button class="mashrouk-btn">تسجيل الدخول</button>
        <!-- <input type="submit" value="تسجيل الدخول" required class="mashrouk-btn" /> -->
        <div class="cell-actions">
          <div class="forgit">
            <router-link to="/ForgetPassword" class="fo">
              نسيت كلمة المرور
            </router-link>
          </div>
        </div>
        <div class="Reg-cell">
          <router-link to="/signup" class="c-s">أنشئ حساب جديد</router-link>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/api-config';
import { createToaster } from '@meforma/vue-toaster';

export default {
  name: 'LogIn',
  data() {
    return {
      email: '',
      password: '',
      token: '',
      storedId: '',
      errorMessage: '',
    };
  },
  methods: {
    async handleSubmit() {
      const toaster = createToaster();
      try {
        const response = await axios.post(`${BASE_URL}/login/GetToken/token`, {
          email: this.email,
          password: this.password,
        });

        if (response.status === 200) {
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('user', JSON.stringify(response.data.username));
          localStorage.setItem('email', JSON.stringify(response.data.email));
          localStorage.setItem('userId', response.data.userId);
          this.storedId = localStorage.getItem('userId');
          toaster.success('تم تسجيل الدخول بنجاح', { position: 'top-left' });
          // Push to the main page
          this.$router.push('/main');
        }
      } catch (error) {
        this.errorMessage = error.response.data.message || 'البريد الالكتروني او كلمة المرورة خطأ'; // Use the error message from the API, if available
        toaster.error(this.errorMessage, {
          position: 'top-right',
        });
      }
    },
  },
};
</script>
