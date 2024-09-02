<template>
  <LogInHeader/>
  <MorLinksHeader />
  <AddtionLinks />
  <bottom-nav />
</template>

<script>
import LogInHeader from '@/components/LogInHeader.vue';
import MorLinksHeader from '@/components/MoreLinksComponents/MoreLinksHeader.vue';
import AddtionLinks from '@/components/MoreLinksComponents/AdditionLinks.vue';
import BottomNav from '@/components/BottomNav.vue';

export default {
  name: 'MoreViews',
  components: {
    LogInHeader,
    MorLinksHeader,
    AddtionLinks,
    BottomNav,
  },
};
</script>
