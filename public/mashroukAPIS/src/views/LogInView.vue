<!-- eslint-disable linebreak-style -->
<!-- eslint-disable max-len -->
<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <body class="sign-bod">
    <SignUpHeader />
    <LoginForm />
  </body>
</template>

<script>
import SignUpHeader from '@/components/SignUpHeader.vue';
import LoginForm from '@/components/LogInForm.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'SignForm',
  data() {
    return {
      isAuthenticated: true,
    };
  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    LoginForm,
    SignUpHeader,
  },
};
</script>
