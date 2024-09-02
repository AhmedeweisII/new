<!-- eslint-disable max-len -->
<template>
  <section class="back-head m-t-20 share-types">
    <div class="container">
      <div class="back-flex">
        <div>
          <Button @click="goBack" class="b-t"><img class="icone-resize" src="../../assets/imgs/right-arrow.png" alt=""></Button>
        </div>
        <div class="m-r-20">
          <h3>حول مشروك</h3>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container" style="margin-top:100px;">

      <div class="about-flex">

        <div>
          <img src="../../assets/imgs/logo.png" alt="" style="width: 300px;">
        </div>

        <div class="about">
          <h1 class="about-header">معلومات حول مشروك</h1>
          <p class=" about-p "> مشروك هو موقع تم انشاءه واطلاقه عام 2024 .. يسمح للمستخدمين بالدخول وتسجيل الحساب دون قيود ومن ثم البدء في انشاء طلبات الشراكة مجانا
            ثم يسمح لهم بدفع رسوم رمزية للدخول للمحادثة والبدء في الاستثمار ..
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutMashrouk',
  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
  },
};
</script>
