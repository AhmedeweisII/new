<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <!--  -->
  <section class="more-head">
    <div class="container">
      <h1>حسابي</h1>
      <div class="sitt-div">
        <router-link to="SettingMenu">
            <img src="../../assets/imgs/settings.png" class="small-img" alt="">
        </router-link>
      </div>
    </div>
  </section>
  <!--  -->
  <!--  -->
  <section class="more-welc">
    <div class="container">
      <h3 class="welc-message">اهلا بك</h3>
      <div class="welc-div">
        <span class="max-con more-name">{{name}}</span>
        <router-link to="/Profile">
          <img src="../../assets/imgs/edit.png" class="small-img" alt="">
        </router-link>
      </div>
    </div>
  </section>
  <!--  -->
  <!--  -->
  <section class="wellets">
    <div class="container">
      <div class="wellet-box">
        <div class="icone-cont">
          <img src="../../assets/imgs/ewallet.png" class="icon-size" alt="">
        </div>
        <div class="wellet-info">
          <label class="wellet-lable">المحفظة</label>
          <p class="wellet-value">{{ balance }} ريال</p>
        </div>
      </div>

      <div class="wellet-box">
        <div class="icone-cont">
          <img src="../../assets/imgs/full-star.png" class="icon-size" alt="">
        </div>
        <div class="wellet-info">
          <label class="wellet-lable">تقييمك</label>
          <p class="wellet-value">{{ randomValue }}</p>
        </div>
      </div>
    </div>
  </section>
  <!--  -->
</template>

<script>
export default {
  name: 'MorLinksHeader',
  data() {
    return {
      name: '',
      balance: '',
      randomValue: 0,
    };
  },
  mounted() {
    this.generateRandomValue();
    // Retrieve the user's name from local storage after logging in
    const storedName = localStorage.getItem('user');
    if (storedName) {
      // Update the name data property with the retrieved name
      this.name = JSON.parse(storedName);
    }
  },
  methods: {
    generateRandomValue() {
      const randomFraction = Math.random();
      const randomValue = 4.1 + randomFraction * 0.8;
      this.randomValue = randomValue.toFixed(1); // Round to 1 decimal place
    },
  },
};
</script>
