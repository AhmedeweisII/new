<!-- eslint-disable max-len -->
<template>
  <section class="back-head  m-t-20 share-types">
    <div class="container">
        <div class="back-flex">
            <div>
              <router-link to="/main"><img class="icone-resize" src="../../assets/imgs/right-arrow.png" alt=""></router-link>
            </div>
            <div class="m-r-20">
                <h3>شراكاتي</h3>
            </div>
            <router-link to="/CommercalRequests" class="m-r-20">
              <h3>تجاري</h3>
            </router-link>
        </div>
        <div class="share-type">
          <router-link to="/Requests" class="mashrouk-btn main-req-button" :class="{ 'not-active': isRouteNotActive('/Requests') }">
            <h4 :class="{ 'not-active': isRouteNotActive('/Requests') }">طلباتي</h4>
          </router-link>
          <router-link to="/offers" class="mashrouk-btn main-req-button m-r-20" :class="{ 'not-active': isRouteNotActive('/offers') }">
            <h4 :class="{ 'not-active': isRouteNotActive('/offers') }">عروضي</h4>
          </router-link>
        </div>
    </div>
</section>
</template>

<script>
export default {
  name: 'RequestBack',
  methods: {
    isRouteNotActive(route) {
      return this.$route.path !== route;
    },
  },
};
</script>
