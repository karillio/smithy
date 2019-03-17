<template>

  <b-navbar toggleable="lg" type="dark" variant="dark">
    <img src="/imgs/adds/logo.png" alt="Кузня Пальмира" class="main_page_logo">
    <b-navbar-brand href="#" class="mx-3 text-uppercase">
        Кузня Пальмира
    </b-navbar-brand>

    

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <img src="/imgs/adds/mycenter.svg" alt="" class="nav-center-img text-center ml-5 w-55">
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#" class="mx-3">Работы</b-nav-item>
        <b-nav-item href="#" class="mx-3">Команда</b-nav-item>
        <b-nav-item href="#" class="mx-3">Контакт</b-nav-item>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

</template>


<style scoped>
 .main_page_logo {
     opacity: 0.8;
     max-height: 40px;
 }

 .nav-center-img {
   height: 40px;
 }
</style>
