<template>

  <b-navbar toggleable="lg" type="dark" variant="dark">
    <img src="imgs/adds/logo.png" alt="Кузня Пальмира" class="main_page_logo">
    <b-navbar-brand href="#" class="mx-3 ml-5 text-uppercase">
        {{$t('app_title')}}
    </b-navbar-brand>

    

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <!-- <img src="imgs/adds/mycenter.svg" alt="" class="nav-center-img text-center ml-5 pl-2 w-50"> -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="/" class="mx-3">{{$t('main')}}</b-nav-item>
        <b-nav-item href="#" class="mx-3">{{$t('gallery')}}</b-nav-item>
        <b-nav-item href="/contact" class="mx-3">{{$t('contact')}}</b-nav-item>
        <locale-changer></locale-changer>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>



<script>

import LocaleChanger from "./LocaleChanger";

export default {
    components: {
      LocaleChanger,
    },
    computed: {
        lang: function () {
            return this.$i18n.t('lang');//this.$t('lang')
        }
    }
}
</script>

<style scoped>
 .main_page_logo {
     opacity: 0.8;
     max-height: 40px;
 }

 .nav-center-img {
   height: 40px;
 }
</style>
