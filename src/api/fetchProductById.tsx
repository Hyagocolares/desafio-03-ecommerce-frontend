// src/api/fetchProductById.ts
import axios from 'axios';
import BASE_URL from './url';

const fetchProductById = async (id: string, setProduct: Function) => {
  try {
    const response = await axios.get(`${BASE_URL}products/${id}`);
    setProduct(response.data);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
};

export default fetchProductById;
