<template>
  <section>
    <b-container v-if="track && track.id">
      <b-row fluid>
        <b-col cols="3" class="text-center mt-2">
          <b-img
            left
            :src="track.album.images[0].url"
            rounded
            alt="Cover"
          ></b-img>
          <b-button size="sm m-2" variant="light" pill @click="selectTrack">
            <b-icon
              icon="soundwave"
              aria-label="Play"
              variant="primary"
            ></b-icon>
          </b-button>
        </b-col>
        <b-col cols="8" class="mt-2 mb-2">
          <b-card
            :header="trackTitle"
            header-text-variant="dark"
            header-tag="header"
            header-bg-variant="light"
          >
            <b-card-text v-for="(v, k) in track" :key="v">
              <strong> {{ k }} </strong>
              <span>{{ v }}</span>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import trackMixin from '@/mixins/track'

export default {
  mixins: [trackMixin],

  computed: {
    ...mapState(['track']),
    ...mapGetters(['trackTitle'])
  },

  created() {
    const id = this.$route.params.id

    // Pregunto si la canción no existe
    if (!this.track || !this.track.id || this.track.id != id) {
      this.getTrackById({ id })
    }
  },

  methods: {
    ...mapActions(['getTrackById']),
  },
}
</script>

<style></style>
