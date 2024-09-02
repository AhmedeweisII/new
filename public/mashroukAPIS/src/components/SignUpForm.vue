<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section class="sign-body sign-body-up">
    <div class="container">
      <form class="form-bod">
        <h2 class="header-title c-h">انشاء حساب</h2>
        <div class="cell">
          <label for="name"></label>
          <input type="text" id="name" v-model="name" class="cell-entery" placeholder="الأسم" required>
        </div>
        <div class="cell">
          <label for="phone"></label>
          <input type="text" id="phone" v-model="phone" class="cell-entery" placeholder="الجوال 05xxxxxxxx" required>
        </div>
        <div class="cell">
          <label for="email"></label>
          <input type="email" id="email" v-model="email" class="cell-entery" placeholder="البريد الإلكتروني" required>
        </div>
        <div class="cell">
          <label for="password"></label>
          <input type="password" id="password" v-model="password" class="cell-entery" placeholder="كلمة المرور" required>
          <span class="span-pass" >يجب ان تحتوي كلمة المرور علي (A-a-&) و ثمانية احرف</span>
        </div>
        <div class="cell">
          <label for="confirmPassword"></label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" class="cell-entery" placeholder="تأكيد كلمة المرور" required>
        </div>
        <div class="cheky">
          <input type="checkbox"  v-model="terms_accepted" class="chek">
          <label for="termesCheckbox"></label>
          <p class="acceptt"> &nbsp; أوافق على&nbsp; <router-link to="/TermesCondition" class="term-link">الشروط والأحكام </router-link></p>
        </div>
        <input class="mashrouk-btn" @click.prevent="signUp" type="submit" value="انشاء حساب" required />
        <div class="Reg-cell">
          <p class="c-alt">لديك حساب بالفعل؟</p>
          <a><router-link to="/login" class="register-link">تسجيل الدخول</router-link></a>
        </div>
      </form>
    </div>
  </section>
</template>

<!-- Add a data property for confirmPassword -->
<script>
import axios from 'axios';
import { createToaster } from '@meforma/vue-toaster';
import { BASE_URL } from '@/api-config';

axios.defaults.baseURL = BASE_URL;
export default {
  name: 'signForm',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '', // Add confirmPassword
      phone: '',
      terms_accepted: false, // Set terms_accepted to true by default
    };
  },
  methods: {
    async signUp() {
      const toaster = createToaster();
      if (
        !this.name
        || !this.email
        || !this.password
        || !this.confirmPassword // Add confirmPassword check
        || !this.phone
        || !this.terms_accepted
      ) {
        console.log('Please fill in all fields.');
        toaster.error('يجب ملئ جميع الحقول والموافقه علي الشروط والاحكام', {
          position: 'top-left',
        });
        setTimeout(() => {
          toaster.clear();
        }, 3000);
        return;
      }

      if (this.password !== this.confirmPassword) {
        console.log('Passwords do not match.');
        toaster.error('كلمة السر غير متطابقة', {
          position: 'top-left',
        });
        setTimeout(() => {
          toaster.clear();
        }, 3000);
        return;
      }

      const user = {
        name: this.name,
        username: this.name,
        email: this.email,
        password: this.password,
        phoneNumber: this.phone,
      };
      try {
        const response = await axios.post(`${BASE_URL}/login/Register/register`, user);
        console.log('User registered successfully!', response);
        if (response.status === 200) {
          toaster.success('تم تسجيل الحساب بنجاح');
          toaster.success(' يرجي تفعيل الحساب عبر البريد ');
          this.$router.push({ name: 'login' });
          setTimeout(() => {
            toaster.clear();
            this.$router.push({ name: 'login' });
          }, 10000);
        }
      } catch (error) {
        console.log(error);
        if (error.status === 400) {
          toaster.error('هذا الايميل  موجود بالفعل');
          setTimeout(() => {
            toaster.clear();
          }, 3000);
        }
      }
    },
  },
};
</script>
