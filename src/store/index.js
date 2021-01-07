import { createStore } from "vuex" 

const store = createStore({
  state: {
    searchQuery: ""
  },
  mutations: {
    changeSearch (state, n) {
        state.searchQuery = n
    }
  }
});

export default store
