<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable linebreak-style -->
<template>
  <body class="sign-bod">
    <SignUpHeader />
    <section class="requists">
      <div class="container">
        <!-- Iterate over the realEstate array -->
        <div class="min-req-box" v-for="(property, index) in realEstate" :key="index">
          <div class="min-req-title-imge-delete">
            <div class="min-req-title-imge">
              <div class="min-req-imge">
                <img v-if="isForSale(property.property_type)" src="../assets/imgs/for-sale.png" alt="For Sale Image">
                <img v-else-if="isVilla(property.property_type)" src="../assets/imgs/villa.png" alt="Villa Image">
                <img v-else-if="isCondominium(property.property_type)" src="../assets/imgs/condominium.png"
                  alt="Condominium Image">
                <img v-else-if="iszero(property.property_type)" src="../assets/imgs/noaqar.png" alt="noaqar">
              </div>
              <div class="info-header">
                <h2 class="info-head min-req-info-head">{{ redirected(property.property_type) }}</h2>
              </div>
            </div>
            <div class="delete-sec profile">
              <div class="min-req-imge-delete">
                <img src="../assets/imgs/profil-pic.jpg" class="icone-resize user-photo ">
              </div>
              <div class="max-con">{{ property.owner ? property.owner.name : 'بدون اسم' }}</div>
            </div>
          </div>

          <div class="ad-details">
            <div class="filed-data">
              <img src="../assets/imgs/to-do-list.png" class="icone-resize">
              <h2 class="data-lable"> &nbsp;رقم الطلب &nbsp;:&nbsp;</h2>
              <h3 class="data-value">{{ shortenId(property.id) }}</h3> <!--  -->
              <p class="Request-num min-Request-num">{{ property.partner_type || '' }}&nbsp;&nbsp;</p>
              <p class="Request-num min-Request-num">{{ getPurposeById(property.purpose) }}</p>
            </div>
            <div class="filed-data">
              <img src="../assets/imgs/calendar.png" class="icone-resize">
              <h2 class="data-lable"> &nbsp; تاريخ النشر &nbsp;:&nbsp;</h2>
              <h3 class="data-value">{{ convertTimestampToFormalDateTime(property.dateCreated) }}</h3>

            </div>
            <div class="filed-data">
              <img src="../assets/imgs/location.png" class="icone-resize">
              <h2 class="data-lable"> &nbsp; المدينة &nbsp;:&nbsp;</h2>
              <h3 class="data-value"> {{ getCityNameById(property.city_id) || '' }}</h3>
            </div>
            <div class="filed-data">
              <img src="../assets/imgs/location.png" class="icone-resize">
              <h2 class="data-lable"> &nbsp; الحي &nbsp;:&nbsp;</h2>
              <h3 class="data-value"> {{ property.partnerNeighborhoods }}</h3>
            </div>
            <div class="filed-data">
              <img src="../assets/imgs/house.png" class="icone-resize">
              <h2 class="data-lable"> &nbsp; النوع &nbsp;:&nbsp;</h2>
              <h3 class="data-value">{{ getproperty_typeById(property.property_type) }}</h3>
            </div>
            <div class="filed-data">
              <img src="../assets/imgs/money.png" class="icone-resize">
              <h2 class="data-lable"> &nbsp; مبلغ كل شريك &nbsp;:&nbsp;</h2>
              <h3 class="data-value">{{ property.investment_cost }} ريال</h3>
              <div class="talk">&nbsp; قابل للتفاوض&nbsp;</div>
            </div>
          </div>

          <div class="filed-flex">
            <img src="../assets/imgs/team.png" class="icone-resize marg-l-5">
            <h2 class="data-lable">عدد الشركاء الحاليين</h2>
            <div class="talk">0/{{ property.partners_count }}</div> <!-- -->
          </div>

          <div class="client-num min-req-client-num">
            <div class="client-box">
              <img src="../assets/imgs/AvatarPurbile.svg" class="client-image">
              <img src="../assets/imgs/Avatar.svg" class="client-image">
              <img src="../assets/imgs/Avatar.svg" class="client-image">
            </div>
          </div>

          <section class="actions">
            <a class="details-link" @click="showLoginToast()">
              التفاصيل
            </a>
            <div class="another-acrions">
              <a class="mashrouk-btn main-req-button" @click="showLoginToast()">
                <h4>أنضم كشريك</h4>
              </a>
              <button href="#" class="main-req-button m-r" style="background-color:transparent;padding: 0;">
                <img src="../assets/imgs/heart.png" class="main-req-button-img" alt="Love" @click="showLoginToast()">
              </button>
            </div>
          </section>
        </div>
        <!--  -->

        <!--  -->
      </div>
    </section>
    <fackBottomNav />
  </body>
</template>

<script>
import SignUpHeader from '@/components/SignUpHeader.vue';
import fackBottomNav from '@/components/fack-BottomNav.vue';
import { createToaster } from '@meforma/vue-toaster';
import { BASE_URL } from '@/api-config';
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      cities: [],
      city_id: '',
      realEstate: [],
    };
  },
  mounted() {
    this.fetchData();
    this.fetchCities();
  },

  methods: {
    showLoginToast() {
      // Show the toast message indicating that the user needs to log in
      const toaster = createToaster();
      toaster.error('يجب عليك تسجيل حساب أو تسجيل الدخول أولاً', { position: 'top-left' });
      // Push the router to the login path
      this.$router.push({ path: '/login' });
    },
    async fetchData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/Home/GetAllPost`,
        );
        this.realEstate = response.data.real_Estate_No.concat(response.data.real_Estate_Yes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchCities() {
      try {
        const response = await axios.get(`${BASE_URL}/Home/GetCities`);
        this.cities = response.data;
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    },
    getCityNameById(cityId) {
      const city = this.cities.find((c) => c.city_id === cityId);
      return city ? city.name_ar : 'N/A';
    },
    convertTimestampToFormalDateTime(timestamp) {
      const dateObj = new Date(timestamp);

      const day = dateObj.getDate().toString().padStart(2, '0');
      // eslint-disable-next-line max-len
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = dateObj.getFullYear();

      return `${day}/${month}/${year}`;
    },
    getproperty_typeById(propertyTypeId) {
      switch (propertyTypeId) {
        case 1:
          return 'ارض';
        case 2:
          return 'فيلا';
        case 3:
          return 'عمارة';
        case 4:
          return 'عمارة (شقق سكنية)';
        case 5:
          return 'عمارة شقق مفروشة';
        case 6:
          return 'عمارة محلات و شقق سكنية';
        case 7:
          return 'عمارة محلات و شقق مفروشة';
        case 8:
          return 'عمارة محلات';
        case 9:
          return 'عمارة محلات ومكاتب';
        case 10:
          return 'عمارة مكاتب';
        case 11:
          return 'بلازا';
        case 12:
          return 'سكني  ';
        case 13:
          return 'سكني تجاري';
        case 14:
          return 'تجاري';
        case 15:
          return 'زراعي';
        case 16:
          return 'صناعي';
        case 17:
          return 'فيلا درج داخلي وشقة';
        case 18:
          return 'فيلا دورين';
        case 20:
          return 'فيلا دورين وملحق';
        default:
          return 'عقار غير معروف';
      }
    },
    isForSale(propertyType) {
      return [1, 12, 13, 14, 15, 16].includes(propertyType);
    },
    isVilla(propertyType) {
      return [2, 17, 18, 20].includes(propertyType);
    },
    isCondominium(propertyType) {
      return [3, 4, 5, 6, 7, 8, 9, 10, 11].includes(propertyType);
    },
    iszero(propertyType) {
      return [0].includes(propertyType);
    },
    redirected(rewrite) {
      switch (rewrite) {
        case 1:
          return 'ارض';
        case 2:
          return 'فيلا';
        case 3:
          return 'عمارة';
        case 4:
          return 'عمارة';
        case 5:
          return 'عمارة';
        case 6:
          return 'عمارة';
        case 7:
          return 'عمارة';
        case 8:
          return 'عمارة ';
        case 9:
          return 'عمارة  ';
        case 10:
          return 'عمارة ';
        case 11:
          return 'عمارة';
        case 12:
          return 'ارض';
        case 13:
          return 'ارض ';
        case 14:
          return 'ارض';
        case 15:
          return 'ارض';
        case 16:
          return 'ارض';
        case 17:
          return 'فيلا';
        case 18:
          return 'فيلا ';
        case 20:
          return 'فيلا  ';
        default:
          return 'عقار غير معروف';
      }
    },
    shortenId(id) {
      const hash = id.split('-').join(''); // Remove dashes
      return hash.substring(0, 8); // Take the first 8 characters
    },
    getPurposeById(purpose) {
      switch (purpose) {
        case 0:
          return 'استثمار';
        case 1:
          return 'تملك';
        // Add more cases as needed
        default:
          return 'null';
      }
    },
  },
  components: {
    SignUpHeader,
    fackBottomNav,
  },
};
</script>
