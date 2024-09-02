<!-- eslint-disable linebreak-style -->
<template>
  <body class="sign-bod">
    <SignUpHeader />
    <signForm />
  </body>
</template>
<script>
import SignUpHeader from '@/components/SignUpHeader.vue';
import signForm from '@/components/SignUpForm.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'index',
  components: {
    signForm,
    SignUpHeader,
  },
  data() {
  },
};
</script>
