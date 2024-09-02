<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <section class="back-head  m-t-20">
    <div class="container">
      <div>
        <div @click="goBack" style="cursor: pointer;"><img class="icone-resize" src="../../assets/imgs/right-arrow.png" alt=""></div>
      </div>
      <div class="m-r-20">
        <h3>اضافة عرض شراكة </h3>
      </div>
    </div>
  </section>

  <h1 style="text-align: center;">
    نموذج عرض شراكة
  </h1>
  <section class="rod">
    <div class="container">
      <h2> هل مواصفات وموقع العقار مناسب ام لا</h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" name="aqar-type" value="1" class="radio-circle" v-model="iSpecificationsOK">
          نعم
        </label>
        <label class="radio-lab">
          <input type="radio" name="aqar-type" value="0" class="radio-circle" v-model="iSpecificationsOK" >
          لا
        </label>
      </form>

      <!-- Radio buttons for yes and no -->
      <h2>هل مبلغ الشراكة مناسب أم لا</h2>
      <form class="roleForm">
        <label class="radio-lab">
          <input type="radio" name="aqar-type" value="1" class="radio-circle" v-model="isAmountofMoneyOK">
          نعم
        </label>
        <label class="radio-lab">
          <input type="radio" name="aqar-type" value="0" class="radio-circle" v-model="isAmountofMoneyOK">
          لا
        </label>
      </form>
    </div>
  </section>

  <section v-if="isAmountofMoneyOK === '0' ">
    <div class="container">
      <div class="cell">
        <label for="myRange2" class="Renge-style">
          اختر المبلغ الذي تستطيع دفعه: <p style="margin-right: 5px;">{{ suggestedAmount }}</p>
          <p style="font-weight: bold;">&nbsp;&nbsp;صافي (يشمل الضريبة)</p>
        </label>
        <input type="range" min="100000" max="5000000" step="50000" class="styled-range" v-model="suggestedAmount">
      </div>
      <div class="Reng-flex">
        <div>100,000&nbsp;ريال</div>
        <div class="paddI"></div>
        <div class="paddI"></div>
        <div class="paddI"></div>
        <div class="padd"></div>
        <div class="padd">5,000,000&nbsp;ريال</div>
      </div>

    </div>
  </section>

  <section>
    <div class="container">
      <div style="display: flex; justify-content: space-between; padding:30px 0;">
        <button class="small-btn" @click="submitOffer">قدم عرض شراكة</button>
        <a @click="goBack" class="small-btn" style="background-color:transparent; color:var(--main-color); border:none; font-weight:bold;">رجوع</a>
      </div>
    </div>
  </section>
</template>

<script>
// http://localhost:8080/AddOffer/2b7c8c0b-25c2-4bdd-e89f-08dc03d4b08d
// ddfbfcd2-d3fc-420a-89d4-cac2f81a26ad
import axios from 'axios';
import { createToaster } from '@meforma/vue-toaster';

export default {
  name: 'AddOffer',
  data() {
    return {
      suggestedAmount: 100000,
      iSpecificationsOK: '',
      isAmountofMoneyOK: '',
      commercial: '',
      real_estate_yes: '',
      real_estate_no: '',
      token: '',
      Iduser: '',
      realEstateId: '',
      user: '',
      partner_count: '',
    };
  },
  mounted() {
    this.Iduser = localStorage.getItem('userId');
    this.user = localStorage.getItem('user');
  },
  created() {
    const [id, partner] = this.$route.params.id.split('/');
    this.realEstateId = id;
    this.partner_count = partner;
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    async submitOffer() {
      const toaster = createToaster();
      try {
        const response = await axios.post('http://localhost:3000/api/requests', {
          // Your fake data object goes here
          username: this.user,
          userid: this.Iduser,
          postid: this.realEstateId,
          partners_count: this.partner_count,
          specificok: this.iSpecificationsOK,
          moneyok: this.isAmountofMoneyOK,
          suggestedamoumt: this.suggestedAmount,
          accept: false,
          pay: false,
        });

        if (response.status === 201) {
          toaster.success('تم اضافة عرضك', { position: 'top-left' });
          // Push to the main page
          this.$router.push('/OfferSucces');
        } else {
          toaster.error('لا يمكن انشاء الطلب ', { position: 'top-right' });
        }
      } catch (error) {
        toaster.error('لقد قمت بانشاء عرض علي هذا الطلب من قبل', { position: 'top-right' });
      }
    },
  },
};
</script>
