<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <body class="sitting-body">
    <section class="back-head m-t-20 share-types">
      <div class="container">
        <div class="back-flex">
          <div>
            <Button @click="goBack" class="b-t"><img style="width: 30px" src="../../assets/imgs/right-arrow.png"
                alt=""></Button>
          </div>
          <div class="m-r-20">
            <h3>الأعدادات</h3>
          </div>
        </div>
      </div>
    </section>
    <section class="additions-links additions-links-sitting">
      <div class="container">
        <router-link to="/Profile" class="addition-link">
          <div class="link-info">
            <img src="../../assets/imgs/AccountCircleFilled.svg" class="small-img">
            <span class="link-span">ملف الشخصي</span>
          </div>
        </router-link>
        <router-link to="/ForgetPassword" class="addition-link">
          <div class="link-info">
            <img src="../../assets/imgs/key.png" class="small-img">
            <span class="link-span">كلمة المرور</span>
          </div>
        </router-link>
        <div class="notify-perent" @click="changeII()">
          <div href="" class="addition-link">
            <div class="link-info">
              <img src="../../assets/imgs/skills.png" class="small-img">
              <span class="link-span">تفضيلات الحساب</span>
            </div>
            <img src="../../assets/imgs/left.arr.png" class="small-img rotate-btn">
          </div>

          <div v-if="isOppenII()">
            <div class="dropdown">
              <select class="dropdown-select" name="Emirate_City">
                <option disabled selected> المدينة *</option>
                <option value="option1"> الرياض </option>
                <option value="option2">مكة</option>
                <option value="option4"> المدينة المنورة</option>
                <option value="option5">الدمام</option>
              </select>
            </div>

            <div class="dropdown">
              <select class="dropdown-select" name="Emirate_City">
                <option disabled selected> الحي *</option>
                <option value="option1">المروج</option>
                <option value="option2">الزهراء</option>
                <option value="option3">حي السويس</option>
                <option value="option4">غير ذلك</option>
              </select>
            </div>
          </div>
        </div>
        <div class="notify-perent" @click="change()">
          <div href="" class="addition-link">
            <div class="link-info">
              <img src="../../assets/imgs/notifications.svg" class="small-img">
              <span class="link-span">الأشعارات</span>
            </div>
            <img src="../../assets/imgs/left.arr.png" class="small-img rotate-btn">
          </div>

          <div v-if="isOppen()">
            <div class="notify-btn">
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider-double round"></span>
              </label>
              <span class="link-span">الطلبات</span>
            </div>
            <div class="notify-btn">
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider-double round"></span>
              </label>
              <span class="link-span">العروض</span>
            </div>
            <div class="notify-btn">
              <label class="switch">
                <input type="checkbox">
                <span class="slider-double round"></span>
              </label>
              <span class="link-span">المحادثات</span>
            </div>
            <div class="notify-btn">
              <label class="switch">
                <input type="checkbox" checked>
                <span class="slider-double round"></span>
              </label>
              <span class="link-span">تجديد الطلبات</span>
            </div>
          </div>
        </div>

        <router-link to="/HelpSupportView" class="addition-link">
          <div class="link-info">
            <img src="../../assets/imgs/customer-service.png" class="small-img">
            <span class="link-span">المساعدة والدعم</span>
          </div>
        </router-link>

        <router-link to="/AboutMashrouk" class="addition-link">
          <div class="link-info">
            <img src="../../assets/imgs/question-mark.png" class="small-img">
            <span class="link-span">حول مشروك</span>
          </div>
        </router-link>

      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: 'SettingMenu',

  data() {
    return {
      visible: false,
      visibleII: false,
    };
  },
  mounted() {
    this.visible = false;
    this.visibleII = false;
  },
  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
    isOppen() {
      return this.visible;
    },
    isOppenII() {
      return this.visibleII;
    },
    change() {
      if (this.visible === false) {
        this.visible = true;
      } else if (this.visible === true) {
        this.visible = false;
      }
    },
    changeII() {
      if (this.visibleII === false) {
        this.visibleII = true;
      } else if (this.visibleII === true) {
        this.visibleII = false;
      }
    },
  },
};
</script>
