<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<template>
  <section class="Profile-body">
  <section class="back-head  m-t-20 share-types">
    <div class="container">
      <div class="back-flex">
        <div>
          <Button @click="goBack" class="b-t"><img class="icone-resize" src="../../assets/imgs/right-arrow.png" alt=""></Button>
        </div>
        <div class="m-r-20">
          <h3>الأعدادات&nbsp;&#62;&nbsp;الملف الشخصي</h3>
        </div>
      </div>
    </div>
  </section>

  <section class="profile-info">
    <div class="container">

      <div class="piccc-carddd">
        <div class="piccc">
          <!-- Bind the image source to the avatar_url -->
          <img :src="avatar_url" class="piccc-imagg">
          <label for="file-input" class="file-input-labell">
            <!-- Use a ref to reference the file input -->
            <span class="camera-iconn" @click="triggerFileInput"><img class="cameraIcon" src="../../assets/imgs/camera.png"></span>
            <input ref="fileInput" type="file" @change="handleFileChange" style="display: none;">
          </label>
        </div>
        <div class="divv-userr-namee">
          <h2 class="hh-userr-namee">صورة الملف الشخصي</h2>
          <button class="small-btn" @click="savepicture" style="text-align: center;" >حفظ الصورة</button>
        </div>
      </div>

      <!-- 1 first line -->
      <div class="cell">
        <div class="cell-label absolut" id="absolutLabel1">
          <span class="cell-name">الأسم</span>
          <div class="star"></div>
        </div>
        <input type="text" class="cell-entery place-tiny" :placeholder="name" v-model="name">
      </div>

      <div class="cell">
        <div class="cell-label absolut">
          <span class="cell-name">رقم الجوال</span>
          <div class="star"></div>
        </div>
        <input type="text" class="cell-entery place-tiny" :placeholder="phone" v-model="phone" >
      </div>

      <div class="cell">
        <div class="cell-label absolut">
          <span class="cell-name">الايميل</span>
          <div class="star"></div>
        </div>
        <input type="text" class="cell-entery place-tiny disabeld" :placeholder="email" v-model="email" disabled>
      </div>

    </div>
    <div style="display: flex;justify-content: space-between; width: 75%;" class="container">
      <button  class="small-btn" @click="saveProfile" >حفظ</button>
      <router-link to="/moreLinks"  class="small-btn small-btn-alt">
        الغاء
      </router-link>
    </div>
  </section>
</section>

</template>

<script>
import axios from '@/axios';
import { BASE_URL } from '@/api-config';
import { createToaster } from '@meforma/vue-toaster';

export default {
  name: 'profileShow',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      country_code: '',
      lang: '',
      access_token: '',
      fileData: null,
      avatar_url: '',
    };
  },
  mounted() {
    const user = localStorage.getItem('user');
    this.access_token = localStorage.getItem('access_token');
    this.name = JSON.parse(user).name;
    this.email = JSON.parse(user).email;
    this.phone = JSON.parse(user).phone;
    this.country_code = JSON.parse(user).country_code;
    this.lang = JSON.parse(user).lang;
    // eslint-disable-next-line max-len
    this.avatar_url = JSON.parse(user).avatar_url;
  },
  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileChange(event) {
      // Store the selected file data
      // eslint-disable-next-line prefer-destructuring
      this.fileData = event.target.files[0];
    },
    savepicture() {
      const toaster = createToaster();
      const formData = new FormData();
      formData.append('avatar', this.fileData);
      axios.post(`${BASE_URL}user/upload-avatar`, formData)
        .then((response) => {
          console.log('Profile picture updated successfully:', response.data);
          const updatedUser = response.data.user;
          console.log('Updated user data:', updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
          if (this.fileData) {
            this.avatar_url = updatedUser.avatar_url;
          }
          toaster.success('تم تحديث الصورة الشخصية ', { position: 'top-left' });
          this.$router.push('/Profile');
        })
        .catch((error) => {
          console.error('Error updating profile picture:', error);
          toaster.error('لم يتم اختيار صورة اضغط علي علامة الكاميرا');
        });
    },
    saveProfile() {
      const formData = new FormData();
      // Append other user data to the FormData object
      formData.append('name', this.name);
      formData.append('email', this.email);
      formData.append('phone', this.phone);
      formData.append('country_code', this.country_code);
      formData.append('lang', this.lang);
      axios.post(`${BASE_URL}user/update-profile`, formData)
        .then((response) => {
          console.log('', response.data);
          const toaster = createToaster();
          toaster.success('تم تحديث الملف الشخصي ', { position: 'top-left' });
          localStorage.setItem('user', JSON.stringify(response.data.user));
          this.$router.push('/Profile');
        })
        .catch((error) => {
          // Handle error
          console.error('حدث خطأ في حفظ البيانات', error);
          const toaster = createToaster();
          toaster.error('Error updating profile picture. Please try again.');
        });
    },
  },
};
</script>
