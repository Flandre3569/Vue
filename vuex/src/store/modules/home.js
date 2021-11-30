import {createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      counter: 100
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    }
  },
  actions: {
    incrementAction(context) {
      setTimeout(() => {
        context.commit('increment');
      },1000)
    }
  }

})