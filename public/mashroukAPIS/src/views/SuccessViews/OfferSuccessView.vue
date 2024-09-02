<template>
  <body class="succ-body">
    <section class="succ-sec">
      <img src="../../assets/imgs/succ.png" alt="">
      <h2 class="data-lable">تم إضافة العرض بنجاح</h2>
      <!-- <div class="Request-box" style="justify-content: center;">
          <p class="Request-label">رقم الطلب : </p>
          <p class="Request-num">10009</p>
      </div> -->
      <h3>انتظر حتي يقبل ناشر الطلب الموافقة علي عرضك </h3>
      <div class="offers-container">
          <h3>يمكنك مراجعة كل عروضك من خلال قسم </h3>
          <router-link to="/offers">
            <p class="Request-num c-m">عروضي </p>
          </router-link>
      </div>

    <router-link to="/offers" class="finish-btn">
      <a class="done-buttton">حسنا</a>
    </router-link>
    </section>
</body>
</template>

<script>
export default {
  name: 'OfferSuccess',
};
</script>
