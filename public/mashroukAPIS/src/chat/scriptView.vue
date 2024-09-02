<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable max-len -->
<template>
  <div v-for="(property, index) in realEstate" :key="index" class="min-req-box">
    <div class="min-req-title-imge-delete">
      <div class="min-req-title-imge">
        <div class="min-req-imge">
          <img v-if="isForSale(property.property_type)" src="../assets/imgs/for-sale.png" alt="For Sale Image">
          <img v-else-if="isVilla(property.property_type)" src="../assets/imgs/villa.png" alt="Villa Image">
          <img v-else-if="isCondominium(property.property_type)" src="../assets/imgs/condominium.png" alt="Condominium Image">
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
        <p class="Request-num min-Request-num">{{getPurposeById(property.purpose)}}</p>
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
      <div class="talk">0/{{ property.partners_count}}</div> <!-- -->
    </div>
    <div class="client-num min-req-client-num">
      <div class="client-box">
        <img src="../assets/imgs/AvatarPurbile.svg" class="client-image">
        <img src="../assets/imgs/Avatar.svg" class="client-image">
        <img src="../assets/imgs/Avatar.svg" class="client-image">
      </div>
    </div>
    <section class="actions">
      <a  class="details-link">
        التفاصيل
      </a>
      <div class="another-acrions">
        <a  class="mashrouk-btn main-req-button">
          <h4>أنضم كشريك</h4>
        </a>
        <button href="#" class="main-req-button m-r" style="background-color:transparent;padding: 0;">
          <img src="../assets/imgs/heart.png" class="main-req-button-img" alt="Love">
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
