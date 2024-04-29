// src/components/home/CircleFeaturedProducts.tsx
import React from 'react';

interface CircleFeaturedProductsProps {
  isNew?: boolean;
  discontPercent?: number | null;
}

const CircleFeaturedProducts: React.FC<CircleFeaturedProductsProps> = ({ isNew, discontPercent }) => {
  return (
    <div className={`circle-container ${isNew ? "circle-true-present" : ""}${discontPercent ? " circle-percent-present" : ""}`}>
      {isNew && (
        <div className={`circle circle-true`} style={{ right: discontPercent ? '7%' : '7%' }}>
          <p className="new-text">New</p>
        </div>
      )}
      {discontPercent && (
        <div className={`circle circle-percent`} style={{ right: isNew ? '27%' : '7%' }}>
          <p className="new-text">{`${discontPercent}%`}</p>
        </div>
      )}
    </div>
  );
};

export default CircleFeaturedProducts;
