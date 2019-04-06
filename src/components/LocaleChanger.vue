<template>
  <div class="locale-changer mx-1">
    <b-form-select v-model="$i18n.locale" :options="options" class="btn-dark locale-changer-select"></b-form-select>
  </div>
</template>

<script>
export default {
  name: 'locale-changer',
  data () {
    return { 
      langs: ['uk', 'ru', 'en', 'de'],
      options: [
          { value: 'uk', text: 'Мова' },
          { value: 'ru', text: 'Язык' },
          { value: 'en', text: 'Language' },
          { value: 'de', text: 'Sprache' }
      ]
    }
  },
  methods: {
    // click: function (e) {
    //   e.preventDefault();
    //   console.log('test');
    // }
  }
}
</script>


<style >
.locale-changer-select {
    color: rgba(255, 255, 255, 0.5) !important;
    background-color: #343a40  !important;
    border-color: #343a40  !important;
    border: none !important;
}
.locale-changer {
      margin-top: 1px ;
}
</style>
