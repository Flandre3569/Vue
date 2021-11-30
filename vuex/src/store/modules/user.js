import {createStore} from 'vuex'

export const store = createStore({
  state() {
    return {
      name: "mx",
      age: 18,
      height: 1.88
    }
  }
})