// src/components/home/BttFeaturedProducts.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Share from '../../assets/icons/VectorShare.svg';
import Compare from '../../assets/icons/VectorCompare.svg';
import Like from '../../assets/icons/VectorLike.svg';
import LikeFilled from '../../assets/icons/VectorLikeFilled.svg';

interface BttFeaturedProductsProps {
  id: number;
  linkTo: string;
}

const BttFeaturedProducts: React.FC<BttFeaturedProductsProps> = ({ id, linkTo }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleClick = () => {
      setIsLiked((prevIsLiked) => !prevIsLiked);
    };
    
  return (
    <div className="card-product-actions">
    <Link to={`/product/${id}`}>
      <button className="product-card-primary-button">
        See Details
      </button>
    </Link>
    <div className="options-action-button">
      <button className="product-card-action-button" onClick={() => alert('Share button clicked!')}>
        <img src={Share} alt="Icon Share" className="action-icon" />
        Share
      </button>
      <button className="product-card-action-button" onClick={() => alert('Compare button clicked!')}>
        <img src={Compare} alt="Icon Compare" className="action-icon" />
        Compare
      </button>
      <button className="product-card-action-button" onClick={handleClick}>
        <img src={isLiked ? LikeFilled : Like} alt={isLiked ? 'Icon Liked Filled' : 'Icon Like'} className="action-icon like" />
        Like
      </button>
    </div>
  </div>
  );
};

export default BttFeaturedProducts;
