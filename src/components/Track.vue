<template>
  <b-card
    v-if="track && track.album"
    :title="track.name"
    :sub-title="track.artists[0].name"
    :img-src="track.album.images[0].url"
    img-alt="Cover"
    img-top
    style="max-width: 20rem"
    class="mb-2"
  >
    <b-card-text> {{ track.duration_ms | ms-to-mm }} </b-card-text>
    <div>
      <b-button size="sm" variant="light" pill @click="selectTrack">
        <b-icon icon="soundwave" aria-label="Play" variant="primary"></b-icon>
      </b-button>
      <b-button size="sm" variant="light" pill @click="goToTrack(track.id)">
        <b-icon icon="disc" aria-label="Play" variant="primary"></b-icon>
      </b-button>
    </div>
  </b-card>
</template>

<script>
import trackMixin from '@/mixins/track'
export default {
  mixins: [trackMixin],

  props: {
    track: { type: Object, required: true },
  },

  methods: {
    goToTrack(id) {
      if (!this.track.preview_url) {
        return
      }
      this.$router.push({ name: 'track', params: { id } })
    },
  },
}
</script>

<style></style>
