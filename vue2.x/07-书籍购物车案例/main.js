const app=new Vue({
  el:'#app',
  data:{
    books:[
      {
        id:1,
        name:'《算法导论》',
        date:'2006-9',
        price:85.00,
        count:1
      },
      {
        id:2,
        name:'《UNIX编程艺术》',
        date:'2006-2',
        price:59.00,
        count:1,
      },
      {
        id:3,
        name:'《编辑珠玑》',
        date:'2008-10',
        price:39.00,
        count:1,
      },
      {
        id:4,
        name:'《代码大全》',
        date:'2006-3',
        price:128.00,
        count:1,
      },
    ],
  },

  methods:{
    //方法调用显示最终价格
    // getFinalPrice(price){
    //   return '￥'+price.toFixed(2);
    // },
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeHandler(index){
      this.books.splice(index,1);
    }
  },

  computed:{
    totalPrice() {
      //普通的循环
      //   let totalPrice=0;
      //   for(let i =0;i<this.books.length;i++){
      //     totalPrice+=this.books[i].price*this.books[i].count;
      //   }
      //   return totalPrice;
      // }

      //2、使用in的循环
      //for(let i in/of this.books)
      // let totalPrice=0;
      // for(let i in this.books){
      //   totalPrice+=this.books[i].price*this.books[i].count;
      // }
      // return totalPrice;

      // //3、使用of的循环
      // let totalPrice=0;
      // for(let item of this.books){
      //   totalPrice+=item.price*item.count;
      // }
      // return totalPrice;
      // reduce
      return this.books.reduce(function(preValue,book){
         return preValue+book.price*book.count
      },0);
    }
  },

  //使用过滤器
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2);
    }
  }
})

//高阶函数：filter/map/reduce
const nums=[10,20,31003,12302,123];

//filter函数的使用
//这个回调函数会把数组中的每个元素传入，
//但是这个函数有一个要求，必须返回一个布尔值。true/false
//当返回true时，函数内部会自动将这次回调的n加入到新的数组中
//当返回false时，函数内部会过滤掉这次的n
let numbers=nums.filter(function (n){
  return n<100;
})
console.log(numbers);


//map函数的使用
//如果让数组中的每个元素都进行某种相同的操作
let numbers2=numbers.map(function(n){
  return n*2;
})
console.log(numbers2);


//reduce函数的使用
//对数组中的所有内容进行汇总的，例如全部相乘、全部相加
let total=numbers2.reduce(function(preValue,n){
return preValue+n;
},0)
console.log(total);

//题目，给定一个数组，进行筛选出小于100的元素，然后把所有被筛选出的元素乘2，再计算总和
let link=[10,20,30,40,200,300];
let link2=link.filter(function (n){
  return n<100;
}).map(function(n){
  return n*2;
}).reduce(function(preValue,n){
  return preValue+n;
},0);

console.log(link2);

//用箭头函数的写法
let link3=link.filter(n => n<100).map(n => n*2).reduce((preValue,n) => preValue+n);
console.log(link3);

