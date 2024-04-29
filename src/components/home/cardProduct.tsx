// src/components/home/CardProduct.tsx
import './cardProduct.css';
import React from "react";
import CircleFeaturedProducts from "./circleFeaturedProducts";
import BttFeaturedProducts from "./bttFeaturedProducts";
import Product from '../../api/products.interface';

interface CardProductProps {
  product: Product;
}

const CardProduct: React.FC<CardProductProps> = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <div className="card-product">
        <CircleFeaturedProducts
          isNew={product.isNew}
          discontPercent={product.discontPercent}
        />
        <img
          src={product.imageLink}
          alt={product.name}
          className="product-image"
        />
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-detail">{product.tags}</p>
          <div className="product-prices">
            <p className="product-price">
              {product.price &&
                new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(parseFloat(product.price))}
            </p>
            {product.discontPrice && (
              <p className="product-descont-price">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(parseFloat(product.discontPrice))}
              </p>
            )}
          </div>
        </div>
      </div>
      <BttFeaturedProducts id={product.id} linkTo={`${product.id}`} />
    </div>
  );
};

export default CardProduct;
