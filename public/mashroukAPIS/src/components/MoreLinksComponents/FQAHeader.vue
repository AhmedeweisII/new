<!-- eslint-disable max-len -->
<template>
  <section class="back-head m-t-20 share-types">
    <div class="container">
      <div class="back-flex">
        <div>
          <Button @click="goBack" class="b-t"><img class="icone-resize" src="../../assets/imgs/right-arrow.png" alt=""></Button>
        </div>
        <div class="m-r-20">
          <h2 class="">مركز الاسئلة الاكثر شيوعا</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FQAHeader',
  methods: {
    goBack() {
      // Use Vue Router to go back
      this.$router.go(-1);
    },
  },
};
</script>
