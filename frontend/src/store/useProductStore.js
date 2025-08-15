import {create} from "zustand";
import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = "http://localhost:3000"
export const useProductStore = create((set) =>({
  products: [],
  loading: false,
  error : null,
  fetchProducts: async () =>{
    set({loading: true});
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
  },

  deleteProduct: async (id) =>{
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`)
      set(prev =>({
        products: prev.products.filter(product => product.id !=id)
      }))
      toast.success("Product deleted successfully")
    } catch (error) {
      if(error.response) {
        set({error: error.response.data.message});
        toast.error(error.response.data.message || "Failed to delete product");
      } else {
        set({error: "An unexpected error occurred"});
      }
    }
  }
}));