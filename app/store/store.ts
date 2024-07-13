// store/products.js
import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  fetchProducts: async () => {
    try {
      console.log("Starting fetch request");
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`);

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("Fetch request completed successfully.");
      set({ products: data.items });
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  },
}));
