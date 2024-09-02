<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<template>
  <section class="back-head m-t-20 share-types">
    <div class="container">
      <div class="back-flex">
        <div>
          <Button @click="goBack" class="b-t"><img style="width: 30px" src="../../assets/imgs/right-arrow.png" alt=""></Button>
        </div>
        <div class="m-r-20">
          <h3>المساعدة والدعم</h3>
        </div>
      </div>
    </div>
  </section>
      <section class="wellets">
        <div class="container">
          <div class="wellet-box">
            <div class="icone-cont">
              <img src="../../assets/imgs/phone.png" class="icon-size" alt="">
            </div>
            <div class="wellet-info ">
              <label class="wellet-lable">اتصل ع الجوال</label>
              <p class="wellet-value">98112365489+</p>
            </div>
          </div>
          <div class="wellet-box">
            <div class="icone-cont">
              <img src="../../assets/imgs/email.png" class="icon-size" alt="">
            </div>
            <div class="wellet-info ">
              <label class="wellet-lable">راسلنا عبر البريد</label>
              <p class="wellet-value">mashrouk@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
  <FQA/>
</template>

<script>
import FQA from '@/views/MoreLinksViews/FQAView.vue';

export default {
  name: 'HelpSupport',
  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
  },
  components: {
    FQA,
  },
};
</script>
