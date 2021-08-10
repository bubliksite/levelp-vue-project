import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const url = 'https://jsonplaceholder.typicode.com/users';

export default new Vuex.Store({
  state: {
    users: null,
    isLoading: false,
    error: null,
  },
  mutations: {
    getUsersStart(state) {
      state.isLoading = true;
      state.users = null;
    },
    getUsersSuccess(state, payload) {
      state.isLoading = false;
      state.users = payload;
    },
  },
  actions: {
    getUsers(context) {
      return new Promise(() => {
        context.commit('getUsersStart');
        fetch(url).then((response) => {
          response.json().then((resp) => context.commit('getUsersSuccess', resp.slice(0, 5)));
        });
      });
    },
  },
  modules: {},
});
