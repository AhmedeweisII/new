<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
    <header class="sec-nav-style">
      <div class="container" id="home">
        <nav class="navbar">
          <div class="iconsy">
            <div class="left-nav">
              <div class="logo-catch">
                <img src="../assets/imgs/logo.png" alt="logo" class="icon-size" />
              </div>
            </div>
          </div>
          <ul class="nav-list">
            <a><router-link to="/signup" class="sign-links transparent" >التسجيل</router-link></a>
            <a><router-link to="/login" class="sign-links transparent" > الدخول</router-link></a>
          </ul>
        </nav>
      </div>
    </header>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'SignUpHeader',
  data() {
  },
};
</script>
