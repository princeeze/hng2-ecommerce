// store/products.js
import { create } from "zustand";

export interface Product {
  page: number;
  size: number;
  total: number;
  debug: null;
  previous_page: null;
  next_page: null;
  items: Item[];
}

export interface Item {
  name: string;
  description: null | string;
  unique_id: string;
  url_slug: string;
  is_available: boolean;
  is_service: boolean;
  previous_url_slugs: null;
  unavailable: boolean;
  unavailable_start: null;
  unavailable_end: null;
  id: string;
  parent_product_id: null;
  parent: null;
  organization_id: OrganizationID;
  product_image: any[];
  categories: any[];
  date_created: Date;
  last_updated: Date;
  user_id: UserID;
  photos: Photo[];
  current_price: CurrentPrice[];
  is_deleted: boolean;
  available_quantity: number;
  selling_price: null;
  discounted_price: null;
  buying_price: null;
  extra_infos: null;
}

export interface CurrentPrice {
  NGN?: Array<any[] | number | null>;
}

export enum OrganizationID {
  The9Fa3461F89D24C1F9Cb1A7Fc7988Bd0C = "9fa3461f89d24c1f9cb1a7fc7988bd0c",
}

export interface Photo {
  model_name: ModelName;
  model_id: string;
  organization_id: OrganizationID;
  filename: string;
  url: string;
  is_featured: boolean;
  save_as_jpg: boolean;
  is_public: boolean;
  file_rename: boolean;
  position: number;
}

export enum ModelName {
  Products = "products",
}

export enum UserID {
  D1547D771E6348E9Bb4046A08Eae8582 = "d1547d771e6348e9bb4046a08eae8582",
}

interface ProductStoreState {
  products: Item[];
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductStoreState>((set) => ({
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
