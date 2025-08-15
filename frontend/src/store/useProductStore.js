import {create} from "zustand";
import axios from "axios";

const BASE_URL = "http://localhost:3000"
export const useProductStore = create((set) =>({
  products: [],
  loading: false,
  error : null,
  fetchProducts: async () =>{
    try {
      const response = await axios.get(`${BASE_URL}/api/products`); 
      set({products: response.data.data, error: null});
    } catch (error) {
      if(error.response) {
        set({error: error.response.data.message});
      } else {
        set({error: "An unexpected error occurred"});
      }
    } finally {
      set({loading: false});
    }
  }
}));