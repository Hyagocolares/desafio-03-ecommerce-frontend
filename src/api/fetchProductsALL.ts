// src/api/fetchProductsAll.ts
import axios from 'axios';
import BASE_URL from './url';

const fetchProductsAll = async (setProducts: Function) => {
  try {
    const response = await axios.get(`${BASE_URL}products`);
    setProducts(response.data);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default fetchProductsAll;
