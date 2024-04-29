// src/components/CategoryList.tsx
import React from 'react';
import './CategoryList.css';
import Category from '../api/categories.interface';

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <section className="categories">
      <h2>Shop by Category</h2>
      <div className="category-list">
        {categories.map((category) => (
          <a key={category.id} href={`shop/${category.name}/products`} className="category-item">
            <img src={`${category.imageLink}`} alt={category.name} className="category-image" />
            <p className="category-name">{category.name}</p>
          </a>
        )).slice(0,3)}
      </div>
    </section>
  );
};

export default CategoryList;
