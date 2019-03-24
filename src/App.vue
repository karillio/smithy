<template>
  <div id="app">
    <nav-bar> </nav-bar>
      <router-view></router-view>
    <main-footer></main-footer>
  </div>
</template>

<script>

import NavBar from "./components/NavBar";
import MainFooter from "./components/MainFooter";

export default {
  name: 'app',
  components: {
    NavBar,
    MainFooter
  }
}
</script>