<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<template>

  <section class="delete-head  m-t-20">
    <div class="container">
      <Button @click="goBack" class="b-t"><img style="width: 30px" src="../../assets/imgs/XVector.svg" alt=""></Button>
      <div class="m-r-20 justfy-c">
        <h3 class="" style="font-size:25px; color: #396FB5;"> عروض طلب رقم ({{shortenId( commercialsId) }}) </h3>
      </div>
      <button id="shareButton" class="" style="background-color: transparent;">
        <img src="../../assets/imgs/shareing.png" alt="Share" style="width: 30px">
      </button>
    </div>
  </section>

  <!-- 0 sec -->
  <section>
    <div class="container">
      <div class="group-head">
        <img src="../../assets/imgs/done.png" class=" group-head-img" width="50px">
        <h1 class="group-head-h">تم القبول</h1>
      </div>
      <div class="group" v-for="request in payingRequests" :key="request.requestId">
        <div class="member">
          <div class="member-flex-two">
            <a class="delete-sec profile member-prof">
              <div class="min-req-imge-delete">
                <img src="../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo ">
              </div>
              <div class="max-con">{{ request.username.replace(/"/g, '') }}</div>
            </a>
            <div class="accept-cointener">
              <router-link :to="{ name: 'OfferDetailsAccepted', params: { id: `${request.requestid}`} }">
                <button class="small-btn accept-btn accept-btn-alt">ازالة</button>
              </router-link>
              <router-link :to="{ name: 'OfferDetailsAccepted', params: { id: `${request.requestid}`} }">
                <img src="../../assets/imgs/exclamation-mark.png" style="width: 25px;">
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
    </div>
  </section>
  <!-- 1 sec -->

  <!-- 0 sec -->
  <!-- <section>
    <div class="container">
      <div class="client-num">
        <div class="client-box restyle">
          <img src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
          <img src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
          <img src="../../assets/imgs/AvatarPurbile.svg" class="client-image">
          <img src="../../assets/imgs/Avatar.svg" class="client-image">
          <div class="restyle-div">
            <h2> الباقي : 1 </h2>
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- 1 sec -->

  <!-- 0 sec -->
  <section>
    <div class="container">
      <div class="group-head">
        <img src="../../assets/imgs/time.png" class="group-head-img" width="50px">
        <h1 class="group-head-h"> انتظار الموافقة (3)</h1>
      </div>
      <div class="group" v-for="request in waitingRequests" :key="request.requestId">
        <div class="member">
          <div class="member-flex-two">
            <a class="delete-sec profile member-prof">
              <div class="min-req-imge-delete">
                <img src="../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo">
              </div>
              <div class="max-con">{{ request.username.replace(/"/g, '') }}</div>
            </a>
            <div class="accept-cointener">
              <button class="small-btn accept-btn" @click="acceptRequest(request.requestid)">قبول العرض</button>
              <router-link :to="{ name: 'OfferDetails', params: { id: `${request.requestid}`} }">
                <img src="../../assets/imgs/exclamation-mark.png" style="width: 25px;">
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
    </div>
  </section>
  <!-- 1 sec -->

</template>

<script>
import axios from 'axios';
import { createToaster } from '@meforma/vue-toaster';

export default {
  name: 'AcceptList',
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
    waitingRequests() {
      // Filter requests with status "waiting"
      return this.requests.filter((request) => request.status === 'waiting');
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
            if (response.status === 201) {
              this.commercialsIdtwo = response.data.updatedRequest.postid;
              // Show a success toast
            }
          })
          .catch((error) => {
            // Handle errors
            console.error(error);
          })
          .finally(() => {
            // Regardless of success or failure, go back
            this.goBack();
            toaster.success('تم الموافقة على العرض', { position: 'top-left' });
          });
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
  },
};
</script>
