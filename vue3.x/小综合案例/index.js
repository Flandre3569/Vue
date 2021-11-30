Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books:[
        { name:"《算法导论》",
          date:"2006-9",
          price:85.0,
          count:1
        },
        { name:"《UNIX编程艺术》",
          date:"2006-2",
          price:59.0,
          count:1
        },
        { name:"《编程珠玑》",
          date:"2008-10",
          price:39.0,
          count:1
        },
        { name:"《代码大全》",
          date:"2006-3",
          price:128.0,
          count:1
        },
      ]
    }
  },
  computed: {
    fullPrice() {
      let fullMoney=0;
      for(let book of this.books){
        fullMoney+=book.price*book.count;
      }
      return fullMoney;
    }
  },
  methods: {
    increment(index) {
      this.books[index].count++;
    },
    decrement(index) {
      this.books[index].count--;
    },
    removeBook(index) {
      this.books.splice(index,1);
    }
  }



}).mount("#app")