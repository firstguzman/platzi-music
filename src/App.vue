<template>
  <div id="app">
    <pm-header />

    <router-view />

    <pm-footer />
  </div>
</template>

<script>

import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'


export default {
  name: 'App',

  components: {
    PmFooter,
    PmHeader,
  },

}
</script>

<style lang="scss">
@import './styles/main.scss';
.is-active {
  border: 3px 23d160 solid;
}
</style>
