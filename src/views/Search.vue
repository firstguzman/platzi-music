<template>
  <main>
    <transition name="move">
      <pm-notification
        v-show="showNotification"
        :notificationType="notificationVariant"
      >
        <p slot="body" v-if="notificationVariant === 'danger'">
          No se encontraron resultados
        </p>
        <p slot="body" v-if="notificationVariant === 'success'">
          {{ searchMessage }}
        </p>
      </pm-notification>
    </transition>

    <transition name="move">
      <pm-loader v-if="isLoading" />
    </transition>

    <section v-show="!isLoading">
      <b-container>
        <b-navbar class="p-0">
          <b-form-input
            class="mr-sm-2"
            placeholder="Buscar canciones"
            v-model="searchQuery"
            @keyup.enter="search"
          ></b-form-input>
          <b-button variant="primary" class="my-2 my-sm-0" @click="search"
            >Buscar</b-button
          >
          <b-button variant="outline-danger">Clear</b-button>
        </b-navbar>
      </b-container>

      <b-container>
        <p>
          {{ searchMessage }}
        </p>
      </b-container>

      <b-container>
        <b-row>
          <b-col v-for="(track, idx) in tracks" :key="idx">
            <pm-track
              v-blur="track.preview_url"
              :class="{ 'is-active': track.id === selectedTrack }"
              :track="track"
              @select="setSelectedTrack"
            />
          </b-col>
        </b-row>
      </b-container>
    </section>
  </main>
</template>

<script>
import trackService from '@/services/track.js'

import PmTrack from '@/components/Track.vue'

import PmLoader from '@/components/shared/Loader.vue'
import PmNotification from '@/components/shared/Notification.vue'

export default {
  name: 'App',

  components: {
    PmTrack,
    PmLoader,
    PmNotification,
  },

  data() {
    return {
      searchQuery: '',
      tracks: [],
      isLoading: false,
      showNotification: false,
      selectedTrack: '',
      notificationVariant: '',
    }
  },

  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    },
  },

  methods: {
    search() {
      if (!this.searchQuery) {
        return
      }

      this.isLoading = true

      trackService.search(this.searchQuery).then((res) => {
        this.showNotification = true
        if (res.tracks.total === 0) {
          this.notificationVariant = 'danger'
        } else {
          this.notificationVariant = 'success'
        }
        this.tracks = res.tracks.items
        this.isLoading = false
      })
    },

    setSelectedTrack(id) {
      this.selectedTrack = id
    },
  },

  watch: {
    showNotification() {
      if (this.showNotification) {
        setTimeout(() => (this.showNotification = false), 3000)
      }
    },
  },
}
</script>

<style lang="scss">
.is-active {
  border: 3px 23d160 solid;
}
</style>
