<template>
  <div id="app">
    <nav-bar> </nav-bar>

    <img src="/imgs/adds/sideimglcut.png" alt="" class="side_img side_img-l">
    <img src="/imgs/adds/sideimgrcut.png" alt="" class="side_img side_img-r">

    <b-container class="bv-example-row">
      <main-gallery></main-gallery>
      <b-row>
        
      </b-row>
    </b-container>

    <main-footer></main-footer>

  </div>
</template>

<script>

import NavBar from "./components/NavBar";
import MainGallery from "./components/MainGallery";
import MainFooter from "./components/MainFooter";

export default {
  name: 'app',
  components: {
    MainGallery,
    MainFooter,
    NavBar,
  }
}
</script>

<style>

    body, html {
        /* background-color: #000; */
        background: linear-gradient(white, 40%, black) !important;
        color: #fff;
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        overflow: hidden;   
    }

  .row {
    width: 100%; 
    margin: 0px;
  }

  .side_img {
    position: absolute;
    top: 10%;
    opacity: 0.5;
    width: 220px;
    height: auto;
  }
  .side_img-l {
      left: 0px;
      margin-left: -50px;
  }
    .side_img-r {
      right: 0px;
      margin-right: -50px;
  }

</style>
