<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <section class="requists">
    <div class="container">
      <!--  -->
      <div v-for="(realEstate, index) in realEstate" :key="index" class="min-req-box">
        <div class="min-req-title-imge-delete">
          <div class="min-req-title-imge">
            <div class="min-req-imge">
              <img v-if="isForSale(realEstate.property_type)" src="../../assets/imgs/for-sale.png" alt="For Sale Image">
              <img v-else-if="isVilla(realEstate.property_type)" src="../../assets/imgs/villa.png" alt="Villa Image">
              <img v-else-if="isCondominium(realEstate.property_type)" src="../../assets/imgs/condominium.png" alt="Condominium Image">
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
            <div class="max-con">{{ realEstate.owner ? realEstate.owner.name : 'بدون اسم' }}</div>
          </div>
        </div>
        <div class="ad-details">
          <div class="filed-data">
            <img src="../../assets/imgs/to-do-list.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp;رقم الطلب &nbsp;:&nbsp;</h2>
            <h3 class="data-value">{{ shortenId(realEstate.id) }}</h3> <!--  -->
            <p class="Request-num min-Request-num">{{ realEstate.partner_type || '' }}&nbsp;&nbsp;</p>
            <p class="Request-num min-Request-num">{{getPurposeById(realEstate.purpose)}}</p>
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
        <div class="filed-flex">
          <img src="../../assets/imgs/team.png" class="icone-resize marg-l-5">
          <h2 class="data-lable">عدد الشركاء الحاليين</h2>
          <div class="talk">0/{{ realEstate.partners_count}}</div> <!-- -->
        </div>
        <div class="client-num min-req-client-num">
          <div class="client-box">
            <img src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
            <img src="../../assets/imgs/Avatar.svg" class="client-image">
            <img src="../../assets/imgs/Avatar.svg" class="client-image">
          </div>
        </div>
        <section class="actions">
          <router-link :to="{ name: 'FullRequestsOthers', params: { id: `${realEstate.id}/${(realEstate.owner.name)}` } }" class="details-link">
            التفاصيل
          </router-link>
          <div class="another-acrions">
            <router-link :to="{ name: 'AddOffer', params: { id: `${realEstate.id}/${(realEstate.partners_count)}` } }" class="mashrouk-btn main-req-button">
              <h4>أنضم كشريك</h4>
            </router-link>
            <button href="#" class="main-req-button m-r" @click="sendLove(realEstate.id)" style="background-color:transparent;padding: 0;">
              <img src="../../assets/imgs/heart.png" class="main-req-button-img" alt="Love">
            </button>
          </div>
        </section>
      </div>
      <!--  -->

      <!--  -->
      <!-- <div class="min-req-box">
        <div class="min-req-title-imge-delete">
          <div class="min-req-title-imge">
            <div class="min-req-imge">
              <img src="../../assets/imgs/condominium.png">
            </div>
            <div class="info-header">
              <h2 class="info-head min-req-info-head">عمارة</h2>
            </div>
          </div>
          <div class="delete-sec">
            <div class="min-req-imge-delete">
              <img src="../../assets/imgs/DeleteFilled.svg" class="icone-resize ">
            </div>
            <div>حذف</div>
          </div>
        </div>
        <div class="ad-details">
          <div class="filed-data">
            <img src="../../assets/imgs/to-do-list.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp;رقم الطلب &nbsp;:&nbsp;</h2>
            <h3 class="data-value">10009&nbsp;</h3>
            <p class="Request-num min-Request-num">(استثمار)</p>
          </div>

          <div class="filed-data">
            <img src="../../assets/imgs/calendar.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; تاريخ النشر &nbsp;:&nbsp;</h2>
            <h3 class="data-value">20-9-2023</h3>
          </div>

          <div class="filed-data">
            <img src="../../assets/imgs/location.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; المدينة &nbsp;:&nbsp;</h2>
            <h3 class="data-value">الرياض</h3>
          </div>
          <div class="filed-data">
            <img src="../../assets/imgs/location.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; الحي &nbsp;:&nbsp;</h2>
            <h3 class="data-value">المروج</h3>
          </div>
          <div class="filed-data">
            <img src="../../assets/imgs/house.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; النوع &nbsp;:&nbsp;</h2>
            <h3 class="data-value">شقق مفروشة</h3>
          </div>
          <div class="filed-data">
            <img src="../../assets/imgs/money.png" class="icone-resize">
            <h2 class="data-lable"> &nbsp; مبلغ كل شريك &nbsp;:&nbsp;</h2>
            <h3 class="data-value"> 200,000 ريال</h3>
            <div class="talk">&nbsp; قابل للتفاوض&nbsp;</div>
          </div>
        </div>
        <div class="client-num min-req-client-num">
          <div class="client-box">
            <img src="../../assets/imgs/Avatar.svg" class="client-image">
            <img src="../../assets/imgs/Avatar.svg" class="client-image">
          </div>
        </div>
        <section class="actions">
          <a href="FullReq.html" class="details-link">التفاصيل</a>
          <div class="another-acrions">
            <button class="mashrouk-btn ">تحديث</button>
            <button class="mashrouk-btn m-r-20" style="background-color: red;">ايقاف</button>
          </div>
        </section>
      </div> -->
      <!--  -->
    </div>
  </section>
</template>

<script>
import { BASE_URL } from '@/api-config';
// import { BASE_URL } from '@/api-config';
import axios from 'axios';

export default {
  // http://localhost:8080/FullRequest/f341bc55-55de-4bec-9ecd-d70c78e4de5d
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'RequestsmainView',

  data() {
    return {
      access_token: '',
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
      commercial: '',
      real_estate_yes: '',
      real_estate_no: '',
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
      console.log('Iduser:', this.Iduser);
    },

    async fetchData() {
      const headers = {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${this.token}`,
      };

      try {
        const response = await axios.get(
          `${BASE_URL}/Home/GetAllPost`,
          { headers },
        );

        this.realEstate = response.data.real_Estate_No.concat(response.data.real_Estate_Yes);
        console.log('Number of elements in real_Estate:', this.realEstate.length);
        // eslint-disable-next-line max-len
        this.realEstate = this.realEstate.filter((item) => item.owner && item.owner.id !== this.Iduser);
        console.log('Number of elements in real_Estate_after filter:', this.realEstate.length);

        this.commercials = response.data.commercials;
        console.log('Number of elements in commercials:', this.commercials.length);
        // eslint-disable-next-line max-len
        this.commercials = this.commercials.filter((item) => item.owner && item.owner.id !== this.Iduser);
        console.log('Number of elements in commercials after filter:', this.commercials.length);
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

      const day = dateObj.getDate().toString().padStart(2, '0');
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
};
</script>
