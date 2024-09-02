<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <section class="delete-head  m-t-20">
    <div class="container">
      <Button @click="goBack" class="b-t"><img style="width: 30px" src="../../../assets/imgs/XVector.svg" alt=""></Button>
      <div class="m-r-20 justfy-c">
        <h3 class="" style="font-size:25px; color: #396FB5;"> تفاصيل دفع طلب رقم (10009) </h3>
      </div>
      <!-- <button id="shareButton" class="" style="background-color: transparent;">
            <img src="../../../assets/imgs/shareing.png" alt="Share" style="width: 30px">
      </button> -->
    </div>
  </section>

  <section>
    <div class="container">
      <div class="group-head">
        <img src="../../../assets/imgs/cashless-payment.png" class=" group-head-img" width="50px" alt="">
        <h1 class="group-head-h">انتظار الدفع ({{payingRequests.length}})</h1>
      </div>
      <div class="group" v-for="request in payingRequests" :key="request.requestId">
        <div class="member">
          <div class="member-flex-two">
            <a class="delete-sec profile member-prof">
              <div class="min-req-imge-delete">
                <img src="../../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo ">
              </div>
              <div class="max-con">{{ request.username.replace(/"/g, '') }}</div>
            </a>
            <div class="accept-cointener">
              <!-- <button class="small-btn accept-btn" @click="enterRequest(request.requestid)">ادفع له</button> -->
              <router-link :to="{ name: 'OfferDetailsAccepted', params: { id: `${request.requestid}`} }">
                <button class="small-btn accept-btn accept-btn-alt">ازالة</button>
              </router-link>
              <router-link :to="{ name: 'OfferDetailsAccepted', params: { id: `${request.requestid}`} }">
                <img src="../../../assets/imgs/exclamation-mark.png" style="width: 25px;">
              </router-link>
            </div>
          </div>
          <div class="data-filed member-data-filed">
            <h2 class="data-lable resize-margin"> &nbsp; تاريخ العرض &nbsp;:&nbsp;</h2>
            <h3 class="data-value resize-margin member-h3-margin">
              {{ convertTimestampToFormalDateTime(request.datecreated) }}
            </h3>
          </div>
        </div>

      </div>

      <!-- 1 group -->
    </div>
  </section>

  <section>
    <div class="container">
      <div class="group-head">
        <img src="../../../assets/imgs/mobile-payment.png" class=" group-head-img" width="50px" alt="">
        <h1 class="group-head-h"> تم الدفع ({{ enteredRequests.length }})</h1>
      </div>
      <div class="group" v-for="request in enteredRequests" :key="request.requestId">
        <div class="member">
          <div class="member-flex-two">
            <a class="delete-sec profile member-prof">
              <div class="min-req-imge-delete">
                <img src="../../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo">
              </div>
              <div class="max-con">{{ request.username.replace(/"/g, '') }}</div>
            </a>
            <div class="accept-cointener">
              <div class="accept-cointener">
                <button class="small-btn accept-btn "> تم الدفع</button>
                <img src="../../../assets/imgs/exclamation-mark.png" width="25px">
            </div>
              <!-- <router-link :to="{ name: 'OfferDetails', params: { id: `${request.requestid}`} }">
                <img src="../../../assets/imgs/exclamation-mark.png" style="width: 25px;">
              </router-link> -->
            </div>
          </div>
          <div class="data-filed member-data-filed">
            <h2 class="data-lable resize-margin"> &nbsp; تاريخ العرض &nbsp;:&nbsp;</h2>
            <h3 class="data-value resize-margin member-h3-margin">
              {{ convertTimestampToFormalDateTime(request.datecreated) }}
            </h3>
          </div>
        </div>
      </div>

      <!-- 1 group -->
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import { createToaster } from '@meforma/vue-toaster';

export default {
  name: 'PaymentList',
  data() {
    return {
      commercialsId: '',
      requests: [],
      commercialsIdtwo: '',
    };
  },
  computed: {
    payingRequests() {
      // Filter requests with status "paying"
      return this.requests.filter((request) => request.status === 'paying');
    },
    enteredRequests() {
      // Filter requests with status "waiting"
      return this.requests.filter((request) => request.status === 'entered');
    },
  },
  created() {
    const { id } = this.$route.params;
    this.commercialsId = id;
    // Fetch requests when the component is created
    this.getRequestsByPost();
  },
  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
    getRequestsByPost() {
      axios.get(`http://localhost:3000/api/requests-by-post/${this.commercialsId}`)
        .then((response) => {
          this.requests = response.data.requestsByPost;
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    },
    acceptRequest(requestId) {
      const toaster = createToaster();
      // Make sure 'requestId' is a valid value
      if (requestId) {
        // Call the API to accept the request
        axios.post(`http://localhost:3000/api/accept-request/${requestId}`)
          .then((response) => {
            // Check if the response code indicates success (200 or 201)
            if (response.status === 200 || response.status === 201) {
              this.commercialsIdtwo = response.data.updatedRequest.postid;
              // Show a success toast
              const toast = toaster();
              toast.success('تم الموافقة على العرض');
              // Optionally, you can navigate to the same page to refresh it
              this.$router.push('/main');
            }
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          });
      } else {
        console.error('Invalid requestId');
      }
    },
    convertTimestampToFormalDateTime(timestamp) {
      const dateObj = new Date(timestamp);

      const day = dateObj.getDate().toString().padStart(2, '0');
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = dateObj.getFullYear();

      return `${day}/${month}/${year}`;
    },
    shortenId(id) {
      const hash = id.split('-').join(''); // Remove dashes
      return hash.substring(0, 8); // Take the first 8 characters
    },
    // enterRequest(requestId) {
    //   const toaster = createToaster();

    //   // Make sure 'requestId' is a valid value
    //   if (requestId) {
    //   // Call the API to update the request to 'entered'
    //     axios.post(`http://localhost:3000/api/enter-request/${requestId}`)
    //       .then((response) => {
    //       // Check if the response code indicates success (200 or 201)
    //         if (response.status === 200 || response.status === 201) {
    //         // Show a success toast
    //           const toast = toaster();
    //           toast.success('تم تحديث العرض للحالة "entered"');
    //           this.$router.push('/AcceptList');
    //         }
    //       })
    //       .catch((error) => {
    //       // Handle errors
    //         console.error(error);
    //       });
    //   } else {
    //     console.error('Invalid requestId');
    //   }
    // },
  },
};
</script>
