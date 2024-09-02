<!-- eslint-disable vuejs-accessibility/heading-has-content -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<template>
  <div>
    <RequestBack />
    <FilterSearch />
    <section class="commeccal-hold">
      <div class="container">
        <div class="min-req-cbox" v-for="(commercials, index) in commercials" :key="index">
          <h2 class="info-head">طلب شريك محل خضراوات</h2>
          <div class="info-body">
            <div class="body-row">
              <div class="row-part">
                <img src="../../assets/imgs/bullet-point.png" class="icone-resize">
                <p class="c-value"> بضاعة</p>
              </div>
              <div class="row-part">
                <img src="../../assets/imgs/rial.png" class="icone-resize">
                <p class="c-value">{{commercials.investment_cost}}</p>
              </div>
            </div>
            <div class="body-row">
              <div class="row-part">
                <img src="../../assets/imgs/profilePicture.jpg" class="icone-resize user-photo">
                <p class="c-value"> {{ commercials.owner ? commercials.owner.name : 'بدون اسم' }}</p>
              </div>
              <div class="row-part">
                <img src="../../assets/imgs/hourglass.png" class="icone-resize">
                <p class="c-value">{{ convertTimestampToFormalDateTime(commercials.dateCreated) }}</p>
              </div>
            </div>
            <div class="body-row">
              <div class="row-part">
                <router-link :to="`/FullRequestsCommercal/${commercials.id}`" class="details-link">
                  التفاصيل
                </router-link>
              </div>
              <div class="row-part">
                <img src="../../assets/imgs/location.png" class="icone-resize">
                <p class="c-value">{{ getCityNameById(commercials.city_id) || '' }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <bottom-nav />
  </div>
</template>

<script>
import { BASE_URL } from '@/api-config';
import BottomNav from '@/components/BottomNav.vue';
import FilterSearch from '@/components/MainComponents/FilterSearch.vue';
import RequestBack from '@/components/FormComponents/RequestBack.vue';
// import { BASE_URL } from '@/api-config';
import axios from 'axios';

export default {
  // http://localhost:8080/FullRequest/f341bc55-55de-4bec-9ecd-d70c78e4de5d
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CommercalRequests',

  data() {
    return {
      user_id: '',
      cities: [],
      city_id: '',
      description: '',
      directions: [],
      domain_id: '',
      domains: [],
      other_contribution: '',
      partners_count: '2',
      partner_type: '',
      project_status: '',
      title: '',
      user_contribution: '',
      Iduser: '',
      token: '',
      commercials: [],
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
    async getuserID() {
      this.Iduser = localStorage.getItem('userId');
    },

    async fetchData() {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.token}`,
      };

      try {
        const response = await axios.get(
          `${BASE_URL}/Home/GetmyPosts?Iduser=${this.Iduser.replace(/"/g, '')}`,
          { headers },
        );
        this.commercials = response.data.commercials;
        console.log('Number of elements in commercials:', this.commercials.length);
      } catch (error) {
        console.error('Error fetching data:', error);
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
    shortenId(id) {
      const hash = id.split('-').join(''); // Remove dashes
      return hash.substring(0, 8); // Take the first 8 characters
    },
    // async deletePartner(partnerId) {
    //   try {
    //     const headers = {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${this.access_token}`,
    //     };

    //     // Make a DELETE request to delete the partner
    //     const response = await axios.delete(`${BASE_URL}partners/${partnerId}`, { headers });

    //     if (response.status === 200) {
    //     // Remove the deleted partner from the local list
    //       this.partners = this.partners.filter((partner) => partner.id !== partnerId);
    //       // Optionally, you can display a success message or perform other actions
    //       console.log('Partner deleted successfully.');
    //     }
    //   } catch (error) {
    //     console.error('Error deleting partner:', error);
    //   // Handle error: display an error message or perform other actions
    //   }
    // },

    // getPropertyTypeName(propertyTypeId) {
    //   const propertyType = this.PropertyTypes.find((type) => type.id === propertyTypeId);
    //   return propertyType ? propertyType.name_ar : 'N/A';
    // },

    // getCityName(partner) {
    //   return partner.city ? partner.city.name_ar : 'N/A';
    // },
    // getNeighborhoodName(partner) {
    // eslint-disable-next-line max-len
    //   const neighborhood = partner.partnerNeighborhoods && partner.partnerNeighborhoods.length > 0
    //     ? partner.partnerNeighborhoods[0].neighborhood
    //     : null;

    //   return neighborhood ? neighborhood.name_ar : 'N/A';
    // },
    // translatePurpose(englishPurpose) {
    //   const translations = {
    //     Invest: 'استثمار',
    //     own: 'تملك', // Add translation for 'Own'
    //     // Add more translations as needed
    //   };

    //   return translations[englishPurpose] || englishPurpose;
    // },

    // getdata() {
    //   // this.storedId = localStorage.getItem('userId');
    //   this.token = localStorage.getItem('token');
    // },

    // fetchPartners() {
    //   const headers = {
    //     'Content-Type': 'multipart/form-data',
    //     Authorization: `Bearer ${this.token}`,
    //   };
    //   axios.get(`${BASE_URL}/Home/GetmyPosts/${this.Iduser}`, { headers })
    //     .then((response) => {
    //       this.partners = response.data.data;
    // eslint-disable-next-line max-len
    //       this.partnerDetails = this.partners.map((partner) => ({ id: partner.id, details: null }));
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching partners:', error);
    //     });
    // },

    // fetchPartnerDetails(partnerId) {
    //   const cachedDetails = this.getCachedDetails(partnerId);

    //   if (cachedDetails) {
    //     return Promise.resolve(cachedDetails);
    //   }

    //   const headers = {
    //     'Content-Type': 'multipart/form-data',
    //     Authorization: `Bearer ${this.access_token}`,
    //   };

    //   return axios.get(`${BASE_URL}partners/${partnerId}`, { headers })
    //     .then((response) => {
    //       const partnerIndex = this.partnerDetails.findIndex((p) => p.id === partnerId);
    //       if (partnerIndex !== -1) {
    // eslint-disable-next-line max-len
    //         this.$set(this.partnerDetails, partnerIndex, { id: partnerId, details: response.data });
    //         this.cacheDetails(partnerId, response.data);
    //       }

    //       return response.data;
    //     })
    //     .catch((error) => {
    //       console.error(`Error fetching details for partner ID ${partnerId}:`, error);
    //       return null;
    //     });
    // },

    // getCachedDetails(partnerId) {
    //   const cachedDetails = localStorage.getItem(`partnerDetails_${partnerId}`);
    //   return cachedDetails ? JSON.parse(cachedDetails) : null;
    // },

    // cacheDetails(partnerId, details) {
    //   localStorage.setItem(`partnerDetails_${partnerId}`, JSON.stringify(details));
    // },

    // updatePartner(partnerId) {
    //   // Handle partner update logic
    //   console.log('Update partner:', partnerId);
    // },

    // stopPartner(partnerId) {
    //   // Handle partner stop logic
    //   console.log('Stop partner:', partnerId);
    // },

    // getPartnerDetails(partnerId) {
    //   const partnerDetails = this.partnerDetails.find((p) => p.id === partnerId);
    //   if (partnerDetails && partnerDetails.details) {
    //     return partnerDetails.details;
    //   } if (partnerDetails) {
    //     // Fetch details if not already available
    //     this.fetchPartnerDetails(partnerId);
    //     return 'Fetching details...';
    //   }
    //   return null;
    // },
  },
  components: {
    BottomNav,
    FilterSearch,
    RequestBack,
  },
};
</script>
