<!-- eslint-disable vuejs-accessibility/heading-has-content -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <section class="delete-head  m-t-20">
    <div class="container">
      <Button @click="goBack" class="b-t"><img style="width: 30px" src="../../assets/imgs/XVector.svg" alt=""></Button>
      <div class="m-r-20 justfy-c">
        <h3 class="" style="font-size:19px; color: #396FB5;"> طلب رقم {{ shortenId(commercialsId) }}</h3>
      </div>
      <button id="shareButton" class="" style="background-color: transparent;">
        <img src="../../assets/imgs/shareing.png" alt="Share" style="width: 30px">
      </button>
    </div>
  </section>
  <section class="commeccal-hold commeccal-hold-overwrit">
    <div class="container">
      <div class="min-req-cbox min-req-cbox-overwrite">
        <h2 class="info-head">طلب شريك محل خضراوات</h2>  <!-- {{ commercial.title }}  -->
        <div class="info-body">
          <div class="body-row">
            <div class="row-part">
              <img src="../../assets/imgs/bullet-point.png" class="icone-resize">
              <p class="c-value"> بضاعة</p> <!-- {{ commercial.domain_id  }}  -->
            </div>
            <div class="row-part">
              <img src="../../assets/imgs/rial.png" class="icone-resize">
              <p class="c-value">{{ commercial.investment_cost }}</p>
            </div>
          </div>
          <div class="body-row">
            <div class="row-part">
              <img src="../../assets/imgs/profilePicture.jpg" class="icone-resize user-photo">
              <p class="c-value"> {{ commercial.owner ? commercials.owner.name : 'انت' }}</p>
            </div>
            <div class="row-part">
              <img src="../../assets/imgs/hourglass.png" class="icone-resize">
              <p class="c-value">{{ convertTimestampToFormalDateTime(commercial.dateCreated) }}</p>
            </div>
          </div>
          <div class="body-row">
            <!-- <div class="row-part">
                <router-link :to="`/FullRequestsCommercal/${commercials.id}`" class="details-link">
                  التفاصيل
                </router-link>
              </div> -->
            <div class="row-part">
              <img src="../../assets/imgs/location.png" class="icone-resize">
              <p class="c-value">{{ getCityNameById(commercial.city_id) || '' }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="commeccal-hold commeccal-hold-overwrit commeccal-hold-overwritII">
    <div class="container">
      <h3 class="description-style">{{ commercial.description }}</h3>
    </div>
  </section>
  <section class="commeccal-hold commeccal-hold-overwrit">
    <div class="container">
      <div class="min-req-cbox min-req-cbox-overwrite">
        <div class="info-body">
          <div class="body-row">
            <div class="row-part">
              <img src="../../assets/imgs/responsibility.png" class="icone-resize">
              <p class="c-value">مسؤوليتك: {{ convert_contribution(commercial.user_contribution) }} </p>
            </div>
            <div class="row-part">
              <img src="../../assets/imgs/responsibility.png" class="icone-resize">
              <p class="c-value">حالة المشروع :  {{ converttext(commercial.project_status) }}</p>
            </div>
          </div>
          <div class="body-row">
            <div class="row-part row-part-override">
              <img src="../../assets/imgs/responsibility.png" class="icone-resize">
              <p class="c-value">   مسؤولية الشريك الأخر : {{ convert_contribution(commercial.other_contribution) }} </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="button-manage">
    <div class="container">
      <div class="button-commercal-hold">
        <button class="mashrouk-btn main-req-button small-overwrite">
          <h4>أنضم كشريك</h4>
        </button>
        <a href="" class=" main-req-button m-r">
          <img src="../../assets/imgs/heart.png" class="main-req-button-img">
        </a>
      </div>
    </div>
  </section> -->
  <section class="bullets  m-t-20">
    <div class="container">
      <!-- 0 head-box -->
      <div class="head-box">
        <div class="head-box-flex">
          <div class="circle circle-active ">
            <p>1</p>
          </div>
          <div class="head-titlte ">
            انتظار الموافقة علي الشركاء
          </div>
        </div>
        <routerLink to="/AcceptList" class="small-btn head-box-flex">
          قائمة الانتظار <p>&nbsp;(+10)</p>
        </routerLink>

      </div>
      <!-- 1 head-box -->
      <div class="line"></div>

      <!-- 0 head-box -->
      <div class="head-box">
        <div class="head-box-flex">
          <div class="circle circle-active ">
            <p>2</p>
          </div>
          <div class="head-titlte ">
            دفع رسوم الخدمة
          </div>
        </div>
        <routerLink to="/PaymentGetWays" class="small-btn head-box-flex">ادفع</routerLink>
      </div>
      <!-- 1 head-box -->
      <div class="line"></div>

      <!-- 0 head-box -->
      <div class="head-box">
        <div class="head-box-flex">
          <div class="circle circle-active ">
            <p>3</p>
          </div>
          <div class="head-titlte ">
            انتظار دفع الشركاء
          </div>
        </div>
        <routerLink to="/PaymentList" class="small-btn head-box-flex">
          تفاصيل الدفع<p>&nbsp;(2/5)</p>
        </routerLink>
      </div>
      <!-- 1 head-box -->
      <div class="line "></div>
      <!-- 0 head-box -->
      <div class="head-box ">
        <div class="head-box-flex">
          <div class="circle circle-active ">
            <p class="">4</p>
          </div>
          <div class="head-titlte ">
            تم الانضمام
          </div>
        </div>
        <router-link to="/Converztions" class="small-btn head-box-flex ">
          الدخول
          للمحادثة
        </router-link>

      </div>
      <!-- 1 head-box -->

    </div>
  </section>

</template>

<script>
import axios from 'axios';
import { BASE_URL } from '@/api-config';

export default {
  name: 'FullRequestsCommercal',
  data() {
    return {
      token: '',
      commercialsId: null,
      commercial: {},
      cities: [],

      requests: [],
    };
  },
  created() {
    // Get the commercialsId from the route params
    const commercialsId = this.$route.params.id;
    this.commercialsId = commercialsId;

    // Make the first API request
    this.fetchCommercialData();
    this.fetchCities();
    // Make the second API request
    // this.fetchRequestsOnPost();
  },
  methods: {
    async fetchCommercialData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/POST/GetPOST?IDPOST=${this.commercialsId}`,
        );

        // Update the 'commercial' data property with the response data
        this.commercial = response.data;

        // Now that data is fetched, you can show the 'Details' section
        this.Details = true;
      } catch (error) {
        console.error('Error fetching commercial data:', error);
      }
    },
    // async fetchRequestsOnPost() {
    //   try {
    //     const response = await axios.get(
    //       `${BASE_URL}/Home/GetRequestsOnPost?IDrquest=${this.commercialsId}`,
    //     );

    //     // Update the 'requests' data property with the response data
    //     this.requests = response.data;
    //   } catch (error) {
    //     console.error('Error fetching requests on post:', error);
    //   }
    // },
    convertTimestampToFormalDateTime(timestamp) {
      const dateObj = new Date(timestamp);
      const optionsDate = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC',
      };
      const formattedDate = dateObj.toLocaleDateString('en-US', optionsDate);
      return `${formattedDate}`;
    },
    converttext(pro) {
      let back = '';
      if (pro === 0) {
        back = 'قائم';
      } else {
        back = 'جديد';
      }
      return back;
    },
    convert_contribution(pro) {
      let back = '';
      if (pro === 0) {
        back = 'المجهود';
      } else {
        back = 'رأس المال';
      }
      return back;
    },
    async fetchCities() {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.token}`,
      };

      try {
        const response = await axios.get(`${BASE_URL}/Home/GetCities`, { headers });
        this.cities = response.data;
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    },

    getCityNameById(cityId) {
      const city = this.cities.find((c) => c.city_id === cityId);
      return city ? city.name_ar : 'N/A';
    },
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
    shortenId(id) {
      const hash = id.split('-').join(''); // Remove dashes
      return hash.substring(0, 8); // Take the first 8 characters
    },
    // getProjectStatusText(status) {
    //   return status === 0 ? 'قائم' : status === 1 ? 'جديد' : 'Unknown Status';
    // },
  },
};
</script>
