import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '@/views/JournalView.vue'
import ClavierView from '@/views/ClavierView.vue'
import ContactView from '@/views/ContactView.vue'
import AddContactView from '@/views/AddContactView.vue'

const routes = [
  {
    path: '/',
    name: 'journal',
    component: JournalView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: ClavierView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/addcontact',
    name: 'addcontact',
    component: AddContactView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
