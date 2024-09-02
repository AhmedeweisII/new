<!-- eslint-disable vuejs-accessibility/heading-has-content -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>
  <section class="back-head  m-t-20">
    <div class="container">
        <div>
          <Button @click="goBack" class="b-t"><img class="icone-resize" src="../../assets/imgs/right-arrow.png" alt=""></Button>
        </div>
        <div class="m-r-20">
            <h3>قائمة المفضلة</h3>
        </div>
    </div>
</section>

<section class="filtersearch">
  <div class="container">
    <div class="search-container fullwidth">
      <img src="@/assets/imgs/search.png" class="search-icon">
      <input type="text" class="search-input" placeholder="رقم الطلب">
      <button class="search-button">ابحث</button>
    </div>
    <a href="filter.html" class="filter search-container">
      <div class="filter-word">تصنيف</div>
      <img src="@/assets/imgs/filter.png" class="small-img">
    </a>
  </div>
</section>

<section class="requists">
  <div class="container">
    <!--  -->
    <div v-for="(Estats, index) in Estats" :key="index" class="min-req-box">
      <div class="min-req-title-imge-delete">
        <div class="min-req-title-imge">
          <div class="min-req-imge">
            <img src="../../assets/imgs/condominium.png">
          </div>
          <div class="info-header">
            <h2 class="info-head min-req-info-head">عمارة</h2>
          </div>
        </div>
        <div class="delete-sec profile">
          <div class="min-req-imge-delete">
            <img src="../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo ">
          </div>
          <div class="max-con">{{ Estats.owner ? Estats.owner.name : 'بدون اسم' }}</div>
        </div>
      </div>
      <div class="ad-details">
        <div class="filed-data">
          <img src="../../assets/imgs/to-do-list.png" class="icone-resize">
          <h2 class="data-lable"> &nbsp;رقم الطلب &nbsp;:&nbsp;</h2>
          <h3 class="data-value">{{ shortenId(Estats.id) }}</h3>
          <p class="Request-num min-Request-num">{{ Estats.partner_type || '' }}&nbsp;&nbsp;</p>
          <p class="Request-num min-Request-num">{{getPurposeById(Estats.purpose)}}</p>
        </div>
        <div class="filed-data">
          <img src="../../assets/imgs/calendar.png" class="icone-resize">
          <h2 class="data-lable"> &nbsp; تاريخ النشر &nbsp;:&nbsp;</h2>
          <h3 class="data-value">{{ convertTimestampToFormalDateTime(Estats.dateCreated) }}</h3>

        </div>
        <div class="filed-data">
          <img src="../../assets/imgs/location.png" class="icone-resize">
          <h2 class="data-lable"> &nbsp; المدينة &nbsp;:&nbsp;</h2>
          <h3 class="data-value"> {{ getCityNameById(Estats.city_id) || '' }}</h3>
        </div>
        <div class="filed-data">
          <img src="../../assets/imgs/location.png" class="icone-resize">
          <h2 class="data-lable"> &nbsp; الحي &nbsp;:&nbsp;</h2>
          <h3 class="data-value"> {{ Estats.partnerNeighborhoods }}</h3>
        </div>
        <div class="filed-data">
          <img src="../../assets/imgs/house.png" class="icone-resize">
          <h2 class="data-lable"> &nbsp; النوع &nbsp;:&nbsp;</h2>
          <h3 class="data-value">{{ getproperty_typeById(Estats.property_type) }}</h3>
        </div>
        <div class="filed-data">
          <img src="../../assets/imgs/money.png" class="icone-resize">
          <h2 class="data-lable"> &nbsp; مبلغ كل شريك &nbsp;:&nbsp;</h2>
          <h3 class="data-value">{{ Estats.investment_cost }} ريال</h3>
          <div class="talk">&nbsp; قابل للتفاوض&nbsp;</div>
        </div>
      </div>
      <div class="filed-flex">
        <img src="../../assets/imgs/team.png" class="icone-resize marg-l-5">
        <h2 class="data-lable">عدد الشركاء الحاليين</h2>
        <div class="talk">0/{{ Estats.partners_count}}</div> <!-- -->
      </div>
      <div class="client-num min-req-client-num">
        <div class="client-box">
          <img src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
          <img src="../../assets/imgs/Avatar.svg" class="client-image">
          <img src="../../assets/imgs/Avatar.svg" class="client-image">
        </div>
      </div>
      <section class="actions">
        <router-link :to="{ name: 'FullRequestsOthers', params: { id: `${Estats.id}` } }" class="details-link">
          التفاصيل
        </router-link>
        <div class="another-acrions">
          <router-link :to="{ name: 'AddOffer', params: { id: Estats.id } }" class="mashrouk-btn main-req-button" style="width: max-content;">
            <h4>أنضم كشريك</h4>
          </router-link>
          <a href="" class="mashrouk-btn main-req-button m-r re-color" style="background-color: red;">
            <!-- <img src="../assets/imgs/add-star.png" class="main-req-button-img"> -->
            <h4>ازالة</h4>
          </a>
        </div>
      </section>
    </div>
    <!--  -->
  </div>
</section>
<section>
  <div class="container">
    <!-- Bottom Navigation Bar -->
    <nav class="bottom-nav">

      <router-link to="/main">
        <a class="nav-link">
          <img src="../../assets/imgs/home.png" class="nav-bar-img ">
          <h3 class="bottom-nav-word"> الرئيسية</h3>
        </a>
      </router-link>

      <router-link to="/Requests">
        <a href="myrequests.html" class="nav-link ">
          <img src="../../assets/imgs/doc.png" class="nav-bar-img ">
          <h3 class="bottom-nav-word ">شراكاتي</h3>
        </a>
      </router-link>

      <router-link to="/Form" style="display:flex;">
        <a class="nav-link">
          <img src="../../assets/imgs/add.png" class="nav-bar-img active-bottom-link">
          <h3 class="bottom-nav-word"></h3>
        </a>
      </router-link>

      <router-link to="/Converztions">
        <a class="nav-link">
          <img src="../../assets/imgs/chat-box.png" class="nav-bar-img">
          <h3 class="bottom-nav-word">محادثة</h3>
        </a>
      </router-link>

      <router-link to="/MoreLinks">
        <a class="nav-link">
          <img src="../../assets/imgs/applications.png" class="nav-bar-img">
          <h3 class="bottom-nav-word">المزيد</h3>
        </a>
      </router-link>
    </nav>

  </div>
</section>
</template>

<script>
import { BASE_URL } from '@/api-config';
import axios from 'axios';
import FilterSearch from '@/components/MainComponents/FilterSearch.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Favorate',
  data() {
    return {
      Estats: [],
      access_token: '',
      user_id: '',
      partners: [],
      partnerDetails: [],
      apartments_number: '1',
      capital: 100000,
      cities: [],
      city_id: '',
      cond: true,
      description: '',
      directions: [],
      domain_id: '',
      domains: [],
      Empaty: '',
      filePreviewStyles: Array(5).fill({}),
      have_property: '',
      images: [],
      needs_money: 'false',
      negotiable: 'false',
      Neighborhood_id: '',
      Neighborhood_ids: [],
      other_contribution: '',
      office_number: '1',
      partnerNeighborhoods: [],
      partners_count: '2',
      partner_type: '',
      plan_number: '',
      project_status: '',
      property_age: '0',
      property_area: '',
      property_floors: '1',
      property_number: '',
      property_type: '',
      property_type_help: '',
      PropertyTypes: [],
      purpose: '',
      shop_number: '1',
      street_width: '',
      title: '',
      true: true,
      units_number: '',
      user_contribution: '',
      uploadBoxes: [0, 1, 2, 3, 4],
      Iduser: '',
      token: '',
      user: {},
      commercials: [],
      realEstate: [],
    };
  },
  mounted() {
    this.getuserID();
    // const user = localStorage.getItem('user');
    this.token = localStorage.getItem('token');
    // this.Iduser = localStorage.get('userId');
    console.log(this.token);
    // this.user_id = JSON.parse(user).id;
    // this.fetchPartners();
    this.fetchData();
    this.fetchCities();
  },

  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
    async getuserID() {
      this.Iduser = localStorage.getItem('userId');
      console.log('Iduser:', this.Iduser);
    },

    async fetchData() {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.token}`,
      };

      try {
        const response = await axios.get(
          `${BASE_URL}/Love/GetmyListLove?IdUser=${this.Iduser}`,
          { headers },
        );

        this.realEstate = response.data;

        // Loop through realEstate array
        // eslint-disable-next-line no-restricted-syntax
        for (const item of this.realEstate) {
          // Check if real_estate_yesID is present
          if (item.real_estate_yesID) {
            // Call fetchCommercialData with real_estate_yesID
            // eslint-disable-next-line no-await-in-loop
            await this.fetchCommercialData([item.real_estate_yesID]);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchCommercialData(postIds) {
      try {
        // Loop through postIds array
        // eslint-disable-next-line no-restricted-syntax
        for (const postId of postIds) {
          // eslint-disable-next-line no-await-in-loop
          const response = await axios.get(
            `${BASE_URL}/POST/GetPOST?IDPOST=${postId}`,
          );
          // Push each response.data to Estats array
          this.Estats.push(response.data);
        }
      } catch (error) {
        console.error('Error fetching commercial data:', error);
      }
    },
    async fetchDataa() {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.token}`,
      };

      try {
        const response = await axios.get(
          `${BASE_URL}/Love/GetmyListLove?IdUser=${this.Iduser}`,
          { headers },
        );

        this.realEstate = response.data;

        // Loop through realEstate array
        // eslint-disable-next-line no-restricted-syntax
        for (const item of this.realEstate) {
          // Check if real_estate_yesID is present
          if (item.real_estate_noID) {
            // Call fetchCommercialData with real_estate_yesID
            // eslint-disable-next-line no-await-in-loop
            await this.fetchCommercialDataa([item.real_estate_noID]);
          }
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
    async fetchCommercialDataa(postIds) {
      try {
        // Loop through postIds array
        // eslint-disable-next-line no-restricted-syntax
        for (const postId of postIds) {
          // eslint-disable-next-line no-await-in-loop
          const response = await axios.get(
            `${BASE_URL}/POST/GetPOST?IDPOST=${postId}`,
          );
          // Push each response.data to Estats array
          this.Estats.push(response.data);
        }
      } catch (error) {
        console.error('Error fetching commercial data:', error);
      }
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
    getproperty_typeById(propertyTypeId) {
      switch (propertyTypeId) {
        case 1:
          return 'ارض';
        case 2:
          return 'عمارة';
        case 3:
          return 'فيلا';
        // Add more cases as needed
        default:
          return 'عقار ';
      }
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
    shortenId(id) {
      const hash = id.split('-').join(''); // Remove dashes
      return hash.substring(0, 8); // Take the first 8 characters
    },
    components: {
      FilterSearch,
    },
  },
};
</script>
