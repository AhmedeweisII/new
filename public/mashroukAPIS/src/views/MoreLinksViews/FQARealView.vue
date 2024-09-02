<template>
  <FQAHeader />
  <FQA />
</template>

<script>
import FQA from '@/views/MoreLinksViews/FQAView.vue';
import FQAHeader from '@/components/MoreLinksComponents/FQAHeader.vue';

export default {
  name: 'FQAReal',
  components: {
    FQA,
    FQAHeader,
  },
};
</script>
