// src/api/fetchCategories.ts
import axios from 'axios';
import BASE_URL from './url';

const fetchCategories = async (setCategories: Function) => {
  try {
    const response = await axios.get(`${BASE_URL}categories`);
    setCategories(response.data);
  } catch (error) {
    console.error("Error fetching categories:", error);
  }
};

export default fetchCategories;
