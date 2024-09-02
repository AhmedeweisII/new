<template>
  <body class="succ-body">
    <section class="succ-sec">
        <img src="../../assets/imgs/succ.png" alt="">
        <h2 class="data-lable">تم إضافة طلبك بنجاح</h2>
        <div class="Request-box" style="justify-content: center;">
          <p class="Request-label"> سوف تجد طلبك في : </p>
          <br>
          <router-link to="/Requests">
            <p class="Request-num c-m">شراكاتي </p>
          </router-link>
        </div>
    </section>
    <router-link to="/Requests" class="finish-btn">
      <a class="done-buttton">حسنا</a>
    </router-link>
</body>
</template>

<script>
export default {
  name: 'FormSuccess',
};
</script>
