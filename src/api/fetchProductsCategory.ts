// src/api/fetchProducts.ts
import axios from 'axios';
import BASE_URL from './url';

const fetchProductsCategory = async (
  categoryName: string,
  currentPage: number,
  perPage: number,
  setProducts: Function,
  setTotalPageCount: Function
) => {
  try {
    const response = await axios.get(`${BASE_URL}categories/${categoryName}/products?page=${currentPage}&limit=${perPage}`);
    setProducts(response.data);
    const totalPages = Number(response.headers["x-total-count"]);
    if (totalPages > perPage) {
      setTotalPageCount(Math.ceil(totalPages / perPage));
    }
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export default fetchProductsCategory;
