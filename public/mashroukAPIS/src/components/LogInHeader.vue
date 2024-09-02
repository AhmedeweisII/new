<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable max-len -->
<template>
  <section class="main-top-header">
    <div class="container">
      <nav class="navbar">
        <div class="iconsy">
          <div class="left-nav">
            <div class="logo-catch">
              <img src="@/assets/imgs/logo.png" alt="logo" class="icon-size" />
            </div>
          </div>
        </div>
        <ul class="nav-list" style="display: flex;">
          <div class="profile-handel">
            <span class="header-name">مرحبا {{name}}</span>
            <router-link to="/Profile">
              <img src="@/assets/imgs/AccountCircleFilled.svg" alt="profile" class="logo" />
          </router-link>
          </div>
          <router-link to="/Notification">
            <img src="@/assets/imgs/notifications.svg" alt="notifications" class="main-header-profile-photo" />
        </router-link>
        </ul>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  name: 'LogInHeader',
  data() {
    return {
      name: '',
    };
  },
  mounted() {
    // Retrieve the user's name from local storage after logging in
    const storedName = localStorage.getItem('user');
    if (storedName) {
      // Update the name data property with the retrieved name
      this.name = JSON.parse(storedName);
    }
  },
};
</script>
