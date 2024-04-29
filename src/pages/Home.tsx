// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import './Home.css';

import fetchCategories from '../api/fetchCategories';
import fetchProductsAll from '../api/fetchProductsALL';

import Banner from '../components/home/Banner';
import CategoryList from '../components/CategoryList';
import FeaturedProducts from '../components/home/FeaturedProducts';
import ProductAdvantages from '../components/ProductAdvantages';


const Home: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchDataProducts = async () => {
      await fetchProductsAll(setProducts);
    };

    fetchDataProducts();
  }, []);

  useEffect(() => {
    const fetchDataCategories = async () => {
      await fetchCategories(setCategories);
    };

    fetchDataCategories();
  }, []);


  return (
    <div className="home">
      <Banner />
      <main>
        <CategoryList categories={categories} />
        <FeaturedProducts text={"Our Products"} limit={8} products={products} />
        <ProductAdvantages />
      </main>
    </div>
  );
};

export default Home;