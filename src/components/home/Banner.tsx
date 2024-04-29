// src/components/home/Banner.tsx
import './Banner.css';
import React from 'react';
import BannerBackground from '../../assets/img/BannerBackground.webp';
import Rectangle from '../../assets/img/Rectangle.webp';

const Banner: React.FC = () => {
    return (
        <div className="banner">
            <img src={BannerBackground} alt="banner Funiro Furniture" className="banner-image" />
            <div className="banner-content">
                <img src={Rectangle} alt="background retangle" className="background-image" />
                <div className='banner-text'>
                    <p>New Arrival</p>
                    <h1>Discover Our</h1>
                    <h1>New Collection</h1>
                    <p>Discover high-quality modern furniture for your home.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
