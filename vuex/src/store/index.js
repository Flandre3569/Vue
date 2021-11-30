import {createStore} from 'vuex'

const store = createStore({
  state() {
    return {
      counter: 100,
      name:"mx",
      age: 18,
      height: 1.88,
      books: [
        {name:"a",price:180},
        {name:"b",price:160},
        {name:"c",price:160},
        {name:"d",price:160},
        {name:"e",price:160}
      ]
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
  getters: {
    totalPrice(state) {
      let totalPrice = 0;
      for(const book of state.books) {
        totalPrice += book.price;
      }
      return totalPrice;
    },
    nameInfo(state) {
      return `name: ${state.name}`;
    },
    ageInfo(state) {
      return `age: ${state.age}`;
    },
    heightInfo(state) {
      return `height: ${state.height}`;
    }
  },
  actions: {
    // 也是放入函数,可以进行异步操作
    incrementAction(context) {
      setTimeout(() => {
        context.commit('increment');
      },1000)
    }
  }
})

export default store;