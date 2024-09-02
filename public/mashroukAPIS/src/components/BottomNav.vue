<!-- eslint-disable vuejs-accessibility/heading-has-content -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <section>
    <div class="container">
      <!-- Bottom Navigation Bar -->
      <nav class="bottom-nav">

        <router-link to="/main">
          <a class="nav-link">
            <img src="../assets/imgs/home.png" class="nav-bar-img ">
            <h3 class="bottom-nav-word"> الرئيسية</h3>
          </a>
        </router-link>

        <router-link to="/Requests">
          <a href="myrequests.html" class="nav-link ">
            <img src="../assets/imgs/doc.png" class="nav-bar-img ">
            <h3 class="bottom-nav-word ">شراكاتي</h3>
          </a>
        </router-link>

        <router-link to="/Form" style="display:flex;">
          <a class="nav-link">
            <img src="../assets/imgs/add.png" class="nav-bar-img active-bottom-link">
            <h3 class="bottom-nav-word"></h3>
          </a>
        </router-link>

        <router-link to="/Converztions">
          <a class="nav-link">
            <img src="../assets/imgs/chat-box.png" class="nav-bar-img">
            <h3 class="bottom-nav-word">محادثة</h3>
          </a>
        </router-link>

        <router-link to="/MoreLinks">
          <a class="nav-link">
            <img src="../assets/imgs/applications.png" class="nav-bar-img">
            <h3 class="bottom-nav-word">المزيد</h3>
          </a>
        </router-link>
      </nav>

    </div>
  </section>
</template>

<script>

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'BottomNav',

  data() {
  },
};
</script>
