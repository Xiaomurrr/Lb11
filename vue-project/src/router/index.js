import { createRouter, createMemoryHistory } from 'vue-router'

import Home from '../components/Home.vue'
import Catalog from '../components/Catalog.vue'
import Contacts from '../components/Contacts.vue'

let routes = [
  { path: '/', component: Home },
  { path: '/catalog', component: Catalog },
  { path: '/contacts', component: Contacts },
]

let router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router

