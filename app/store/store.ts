// store/products.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "../utils/utils";

interface CartItem {
  product: Product;
  quantity: number;
}

interface ProductStoreState {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  removeFromCart: (productId: string) => void;
}

export const useProductStore = create(
  persist<ProductStoreState>(
    (set) => ({
      cart: [],
      addToCart(product) {
        set((state) => {
          const existingCartItemIndex = state.cart.findIndex(
            (item) => item.product.id === product.id,
          );

          if (existingCartItemIndex !== -1) {
            return {
              cart: [...state.cart],
            };
          }

          return { cart: [...state.cart, { product, quantity: 1 }] };
        });
      },
      updateCartQuantity(productId, quantity) {
        set((state) => {
          const updatedCart = state.cart.map((item) =>
            item.product.id === productId ? { ...item, quantity } : item,
          );
          return { cart: updatedCart };
        });
      },
      removeFromCart(productId) {
        set((state) => ({
          cart: state.cart.filter((item) => item.product.id !== productId),
        }));
      },
    }),
    {
      name: "new store",
    },
  ),
);
