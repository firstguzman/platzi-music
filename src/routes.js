import Search from '@/views/Search.vue'
import About from '@/views/About.vue'
import TrackDetail from '@/views/TrackDetail.vue'

const routes = [
  { path: '/', component: Search, name: 'search' },
  { path: '/about', component: About, name: 'about' },
  { path: '/track/:id', component: TrackDetail, name: 'track' },
]

export default routes
