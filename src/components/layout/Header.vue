<template>
  <header class="fluid-container header bg-light pb-4">
    <b-navbar class="bg-light">
      <b-navbar-brand tag="h1" class="mb-0">
        <strong> 📻 Platzi Music</strong></b-navbar-brand
      >
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <router-link
            class="flex align-items-center mr-3"
            :to="{ name: 'search' }"
          >
            Buscar
          </router-link>
          <router-link class="flex align-items-center" to="/about">
            Nosotros
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container>
      <b-row>
        <b-col class="text-center">
          <h1>Platzi Music</h1>
          <h2>Canciones que están Vue-nisimas</h2>
          <pm-player />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>
<script>
import PmPlayer from '@/components/Player.vue'

export default {
  components: {
    PmPlayer,
  },
}
</script>
