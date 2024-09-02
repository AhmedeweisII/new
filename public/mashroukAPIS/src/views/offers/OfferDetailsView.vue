<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <body>
    <section class="back-head  m-t-20">
      <div class="container">
        <div>
          <Button @click="goBack" class="b-t"><img style="width: 30px" src="../../assets/imgs/right-arrow.png" alt=""></Button>
        </div>
        <div class="m-r-20">
          <h3>تفاصيل العرض</h3>
        </div>
      </div>
    </section>

    <!-- 0 sec -->
    <section>
      <div class="container">
        <!-- 0 group -->
        <div class="group" v-if="offerDetails">
          <div class="group-head">
            <h1 class="group-head-h">{{ offerDetails.username ? offerDetails.username.replace(/"/g, '') : '' }}</h1>
          </div>
          <!--  -->
          <div class="member">
            <div class="member-flex-two">
              <a class="delete-sec profile member-prof">
                <div class="min-req-imge-delete">
                  <img src="../../assets/imgs/profil-pic.jpg" class="icone-resize user-photo ">
                </div>
                <div class="max-con"> </div>
              </a>
              <div class="accept-cointener">
                <button class="small-btn accept-btn"  @click="acceptRequest(offerDetails.requestid)">قبول العرض</button>
              </div>
            </div>
            <div class="data-filed member-data-filed">
              <h2 class="data-lable resize-margin"> &nbsp; تاريخ العرض &nbsp;:&nbsp;</h2>
              <h3 class="data-value resize-margin member-h3-margin"> {{ convertTimestampToFormalDateTime(offerDetails.datecreated) }}</h3>
            </div>
            <div class="data-filed member-data-filed">
              <h2 class="data-lable resize-margin"> &nbsp; موقع العقار &nbsp;:&nbsp;</h2>
              <h3 class="data-value resize-margin member-h3-margin">{{ getSpecificOkText() }}</h3>
            </div>
            <div class="data-filed member-data-filed">
              <h2 class="data-lable resize-margin"> &nbsp; مبلغ الشراكة&nbsp;:&nbsp;</h2>
              <h3 class="data-value resize-margin member-h3-margin">{{ getmoneyokText() }}</h3>
            </div>
            <div class="data-filed member-data-filed" v-if="showMony()">
              <h2 class="data-lable resize-margin"> &nbsp; المقدرة المالية &nbsp;:&nbsp;</h2>
              <h3 class="data-value resize-margin member-h3-margin"> {{ offerDetails.suggestedamount }} ريال </h3>
            </div>

          </div>
          <!--  -->
        </div>
      </div>
      <!--  -->
      <!-- 1 group -->
    </section>
    <!-- 1 sec -->

  </body>
</template>

<script>
import axios from 'axios';

export default {
  name: 'OfferDetails',
  data() {
    return {
      offerId: '',
      offerDetails: null,
      moneyok: '',
    };
  },
  mounted() {
    this.showMony();
  },
  created() {
    const { id } = this.$route.params;
    this.offerId = id;
    this.getRequestById(); // Trigger the API call when the component is created
  },
  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
    getRequestById() {
      axios.get(`http://localhost:3000/api/request/${this.offerId}`)
        .then((response) => {
          // Update the offerDetails data property with the fetched details
          this.offerDetails = response.data.request;
          this.moneyok = response.data.request.moneyok;
        })
        .catch((error) => {
          // Handle errors
          console.error(error);
        });
    },
    convertTimestampToFormalDateTime(timestamp) {
      const dateObj = new Date(timestamp);

      const day = dateObj.getDate().toString().padStart(2, '0');
      const month = (dateObj.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
      const year = dateObj.getFullYear();

      return `${day}/${month}/${year}`;
    },
    getSpecificOkText() {
      return this.offerDetails && this.offerDetails.specificok ? 'مناسب' : 'غير مناسب';
    },
    getmoneyokText() {
      return this.offerDetails && this.offerDetails.moneyok ? 'مناسب' : 'غير مناسب';
    },
    showMony() {
      return !this.moneyok;
    },
  },
};
</script>

<style></style>
