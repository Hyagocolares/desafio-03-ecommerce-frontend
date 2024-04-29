// src/components/Banner.tsx
import React from 'react';
import BannerBackground from '../../assets/img/BannerBackground2.webp';
import './BannerShop.css';

const BannerShop: React.FC = () => {
    return (
        <div className="banner-shop">
            <img src={BannerBackground} alt="banner Funiro Furniture" className="banner-image-shop" />
            <div className="banner-content-shop">
                <div className='banner-text-shop'>
                    <h1>Shop</h1>
                    <p>Home {'>'} Shop</p>
                </div>
            </div>
        </div>
    );
};

export default BannerShop;
