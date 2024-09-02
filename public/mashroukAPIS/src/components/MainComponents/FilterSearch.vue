<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<!-- eslint-disable vuejs-accessibility/alt-text -->
<template>
  <section class="filtersearch">
    <div class="container">
      <div class="search-container fullwidth">
        <img src="@/assets/imgs/search.png" class="search-icon">
        <input type="text" class="search-input" placeholder="رقم الطلب">
        <button class="search-button">ابحث</button>
      </div>
      <a href="filter.html" class="filter search-container">
        <div class="filter-word">تصنيف</div>
        <img src="@/assets/imgs/filter.png" class="small-img">
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FilterSearch',
};
</script>
