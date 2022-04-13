const trackMixin = {
  //Aqui se definen funcionalidades del vue model tal cual como un componente de Vue
  methods: {
    selectTrack() {
      if (!this.track.preview_url) {
        return
      }
      // Mutación del estado
      this.$store.commit('setTrack', this.track)
    },
  },
}

export default trackMixin
