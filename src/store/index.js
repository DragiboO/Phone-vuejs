import { createStore } from 'vuex'

export default createStore({
  state: {
    contacts: [
      {
        name: 'Toto',
        number : '00 00 00 00 00'
      },
      {
        name: 'Tata',
        number : '11 11 11 11 11'
      },
      {
        name: 'Titi',
        number : '22 22 22 22 22'
      }
    ],
    calls: [
    ]
  },
  getters: {
  },
  mutations: {
    addContact(state, contact) {
      state.contacts.push(contact)
    },
    phoneCall(state, call) {
      state.calls.push(call)
    }
  },
  actions: {
  },
  modules: {
  }
})
