import Vue from 'vue'
import Vuex from 'vuex'

import trackService from '@/services/track'

// Informarle a Vue que usará Vuex
Vue.use(Vuex)

// Instancia del store del Vuex
const store = new Vuex.Store({
  state: {
    track: {},
  },
  getters: {
    trackTitle(state) {
      if (!state.track.name) {
        return ''
      }
      return `${state.track.name} - ${state.track.artists[0].name}`
    },
  },
  mutations: {
    setTrack(state, track) {
      state.track = track
    },
  },
  actions: {
    getTrackById(context, payload) {
      return trackService.getById(payload.id).then((res) => {
        context.commit('setTrack', res)
        return res
      })
    },
  },
})

// Exportación del store para usarlo en el main
export default store
