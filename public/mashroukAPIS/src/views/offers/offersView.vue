<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <RequestBack />
  <FilterSearch />
  <section class="requists">
    <div class="container">
      <!--  -->
      <div v-for="(realEstate, index) in realEstate" :key="index" class="min-req-box">
        <div class="min-req-title-imge-delete">
          <div class="min-req-title-imge">
            <div class="min-req-imge">
              <img v-if="isForSale(realEstate.property_type)" src="../../assets/imgs/for-sale.png" alt="For Sale Image">
              <img v-else-if="isVilla(realEstate.property_type)" src="../../assets/imgs/villa.png" alt="Villa Image">
              <img v-else-if="isCondominium(realEstate.property_type)" src="../../assets/imgs/condominium.png"
                alt="Condominium Image">
              <img v-else-if="iszero(realEstate.property_type)" src="../../assets/imgs/noaqar.png" alt="noaqar">
            </div>
            <div class="info-header">
              <h2 class="info-head min-req-info-head">{{ redirected(realEstate.property_type) }}</h2>
            </div>
          </div>
          <div class="delete-sec profile">
            <div class="min-req-imge-delete">
              <img src="../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo ">
            </div>
            <div class="max-con">{{ realEstate.owner ? realEstate.owner.name : ' بدون اسم ' }}</div>
          </div>
        </div>
        <div class="ad-details">
          <div class="filed-data">
            <img src="../../assets/imgs/to-do-list.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp;رقم الطلب &nbsp;:&nbsp;</h2>
            <h3 class="data-value">{{ shortenId(realEstate.id) }}</h3> <!--  -->
            <p class="Request-num min-Request-num">{{ realEstate.partner_type || '' }}&nbsp;&nbsp;</p>
            <p class="Request-num min-Request-num">{{ getPurposeById(realEstate.purpose) }}</p>
          </div>

          <div class="filed-data">
            <img src="../../assets/imgs/calendar.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; تاريخ النشر &nbsp;:&nbsp;</h2>
            <h3 class="data-value">{{ convertTimestampToFormalDateTime(realEstate.dateCreated) }}</h3>
          </div>

          <div class="filed-data">
            <img src="../../assets/imgs/location.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; المدينة &nbsp;:&nbsp;</h2>
            <h3 class="data-value"> {{ getCityNameById(realEstate.city_id) || '' }}</h3>
          </div>
          <div class="filed-data">
            <img src="../../assets/imgs/location.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; الحي &nbsp;:&nbsp;</h2>
            <h3 class="data-value"> {{ realEstate.partnerNeighborhoods }}</h3>
          </div>
          <div class="filed-data">
            <img src="../../assets/imgs/house.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; النوع &nbsp;:&nbsp;</h2>
            <h3 class="data-value">{{ getproperty_typeById(realEstate.property_type) }}</h3>
          </div>
          <div class="filed-data">
            <img src="../../assets/imgs/money.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; مبلغ كل شريك &nbsp;:&nbsp;</h2>
            <h3 class="data-value">{{ realEstate.investment_cost }} ريال</h3>
            <div class="talk">&nbsp; قابل للتفاوض&nbsp;</div>
          </div>
        </div>
        <!-- <div class="filed-flex">
          <img src="../../assets/imgs/team.png" class="icone-resize marg-l-5">
          <h2 class="data-lable">عدد الشركاء الحاليين</h2>
          <div >
            <div class="talk">
              /{{ realEstate.partners_count }}
            </div>
          </div>
        </div>
        <div class="client-num">
          <div class="client-num min-req-client-num">
            <template v-for="(item, i) in Array.from({ length: entered + 1 })" :key="i">
              <img v-if="i <= entered" src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
            </template>
            <template v-for="(item, i) in Array.from({ length: realEstate.partners_count - entered - 1 })" :key="i">
              <img src="../../assets/imgs/Avatar.svg" class="client-image">
            </template>
          </div>
        </div> -->
        <div class="cases">
          <span v-if="requests[index].status === 'waiting'" class="case-y">في انتظار الموافقة</span>
          <span v-else-if="requests[index].status === 'paying'" class="case-g">في انتظار الدفع</span>
          <span v-else-if="requests[index].status === 'entered'" class="case-b">تم الأنضمام</span>
        </div>
        <section class="actions">
          <router-link :to="{ name: 'FullRequestsOthers', params: { id: `${realEstate.id}/'بدون اسم'` } }"
            class="details-link">
            التفاصيل
          </router-link>
          <div class="another-acrions">
            <a href="" class="mashrouk-btn main-req-button" style="background-color: red;">
              <!-- <img src="../../assets/imgs/add-user.png" class="main-req-button-img"> -->
              <h4 style="width: max-content;">الغاء العرض</h4>
            </a>
            <button href="#" class="main-req-button m-r" @click="sendLove(realEstate.id)"
              style="background-color:transparent;padding: 0;">
              <img src="../../assets/imgs/heart.png" class="main-req-button-img" alt="Love">
            </button>
          </div>
        </section>
      </div>

    </div>
  </section>
  <bottom-nav />
</template>

<script>
import BottomNav from '@/components/BottomNav.vue';
import FilterSearch from '@/components/MainComponents/FilterSearch.vue';
import RequestBack from '@/components/FormComponents/RequestBack.vue';
import axios from 'axios';
import { DEV_BASE_URL, BASE_URL } from '@/api-config';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'offers',
  data() {
    return {
      Iduser: '', // Replace with the actual user ID you want to fetch requests for
      requests: [],
      requestsByPost: [],
      realEstate: [],
      loading: true,
      cities: [],
      city_id: '',
      access_token: '',
      partners: [],
      partnerDetails: [],
      apartments_number: '1',
      capital: 100000,
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
      token: '',
      user: {},
      commercials: [],
      commercial: '',
      real_estate_yes: '',
      real_estate_no: '',
      waiters: 0,
      payners: 0,
      entered: 0,
      commercialsId: '',
    };
  },
  mounted() {
    this.fetchRequestsByUser();
    this.getuserID();
    this.fetchCities();
  },
  created() {
    this.getuserID();
  },
  computed: {
    enteredRequestsCounts() {
      return this.requestsByPost.map((post) => this.getEnteredRequestsCount(post));
    },
    // payingRequests() {
    //   return this.requests.filter((request) => request.status === 'paying');
    // },
    // waitingRequests() {
    //   return this.requests.filter((request) => request.status === 'waiting');
    // },
    // enteredRequests() {
    //   // Filter requests with status "waiting"
    //   return this.requests.filter((request) => request.status === 'entered');
    // },
  },
  methods: {
    getEnteredRequestsCount(post) {
      // Filter requests with status "entered" and count them
      return post.filter((request) => request.status === 'entered').length;
    },
    async getRequestsByPostId(postId) {
      try {
        const response = await axios.get(`${DEV_BASE_URL}/api/requests-by-post/${postId}`);
        this.requestsByPost.push(response.data.requestsByPost);
      } catch (error) {
        console.error('Error fetching requests by post:', error);
      }
    },

    async fetchCommercialData(postId) {
      try {
        const response = await axios.get(`${BASE_URL}/POST/GetPOST?IDPOST=${postId}`);
        const commercialData = response.data;
        this.realEstate.push(commercialData);

        // After fetching commercial data, get requests by post ID
        await this.getRequestsByPostId(commercialData.id);

        // Update entered count based on the status "entered" in requestsByPost
        const enteredCount = this.requestsByPost.flat().filter((request) => request.status === 'entered').length;
        this.entered = enteredCount;
      } catch (error) {
        console.error('Error fetching commercial data:', error);
      }
    },

    async fetchRequestsByUser() {
      try {
        const response = await axios.get(`${DEV_BASE_URL}/api/requests-by-user/${this.Iduser}`);
        this.requests = response.data.requestsByUser;
        this.loading = false;

        await Promise.all(this.requests.map((request) => this.fetchCommercialData(request.postid)));
      } catch (error) {
        console.error('Error fetching requests by user', error);
      }
    },
    async getuserID() {
      const rawIduser = localStorage.getItem('userId');
      this.Iduser = rawIduser;
      console.log('Iduser:', this.Iduser);
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
    convertTimestampToFormalDateTime(timestamp) {
      const dateObj = new Date(timestamp);

      const day = dateObj.getDate().toString().padStart(2, '0');
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = dateObj.getFullYear();

      return `${day}/${month}/${year}`;
    },
    getCityNameById(cityId) {
      const city = this.cities.find((c) => c.city_id === cityId);
      return city ? city.name_ar : 'N/A';
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
    sendLove(realEstateId) {
      // Prepare data with the dynamic realEstateId
      const data = {
        reactor: this.Iduser,
        commercial: '',
        real_estate_yes: '',
        real_estate_no: '',
      };
      if (this.realEstate.property_number) {
        data.real_estate_yes = `${realEstateId}`;
      } else {
        data.real_estate_no = `${realEstateId}`;
      }
      // Make a POST request to the API
      fetch('https://www.mashrook.somee.com/Love/AddLove', {
        method: 'POST',
        headers: {
          Accept: 'text/plain',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
      // eslint-disable-next-line no-shadow
        .then((data) => {
          console.log('Success:', data);
          // Handle success if needed
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle error if needed
        });
    },
  },
  components: {
    BottomNav,
    FilterSearch,
    RequestBack,
  },
};
</script>
