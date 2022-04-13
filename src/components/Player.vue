<template>
  <b-container v-if="track && track.album">
    <p>
      <b-img
        rounded="circle"
        width="120px"
        class="width=120px"
        :src="track.album.images[0].url"
        alt="cover"
      />
    </p>
    <p>
      <strong>{{ track.name }}</strong>
      <small>[{{ track.duration_ms | ms - to - mm }}]</small>
    </p>
    <p><audio :src="track.preview_url" controls></audio></p>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['track']),
  },
}
</script>

<style lang="scss" scoped></style>
