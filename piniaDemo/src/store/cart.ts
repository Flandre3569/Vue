import { defineStore } from "pinia";
import { IProducts } from "@/api/shop";
import { useProductsStore } from "@/store/products";

// 将ICart里的属性和IProducts进行合并，并且过滤掉IProducts中的inventory属性
type ICart = {
  quantity: number;
} & Omit<IProducts, "inventory">;

export const useCartStore = defineStore("cart", {
  state() {
    return {
      cartProducts: [] as ICart[],
    };
  },
  getters: {},
  actions: {
    addProduct(product: IProducts) {
      console.log(product);
      // 检查库存
      if (product.inventory < 1) {
        return;
      }
      // 检查购物车中是否有该物品
      const cartItem = this.cartProducts.find((item: ICart) => {
        return item.id === product.id;
      });
      if (cartItem) {
        cartItem.quantity++;
      } else {
        this.cartProducts.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1,
        });
      }

      // 更新商品信息
      const productsStore = useProductsStore();
      productsStore.decrementProducts(product);
    },
  },
});
