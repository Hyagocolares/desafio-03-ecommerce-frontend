// src/components/ProductAdvantages.tsx
import React from 'react';
import './ProductAdvantages.css';

import Quality from '../assets/icons/VectorSeloQuality.svg';
import Protection from '../assets/icons/VectorSeloProtection.svg';
import Shipping from '../assets/icons/VectorSeloShipping.svg';
import Support from '../assets/icons/VectorSeloSupport.svg';

interface ProductAdvantageProps {
    iconUrl: string;
    title: string;
    description: string;
}

const ProductAdvantage: React.FC<ProductAdvantageProps> = ({
    iconUrl,
    title,
    description,
}) => {
    return (
        <div className="product-advantage">
            <img src={iconUrl} alt={title} className="advantage-icon" />
            <div className="advantage-info">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

const ProductAdvantages: React.FC = () => {
    const advantages = [
        {
            iconUrl: Quality,
            title: 'High Quality',
            description: 'crafted from top materials',
        },
        {
            iconUrl: Protection,
            title: 'Warranty Protection',
            description: 'Over 2 years',
        },
        {
            iconUrl: Shipping,
            title: 'Free Shipping',
            description: 'Order over 150 $',
        },
        {
            iconUrl: Support,
            title: '24 / 7 Support',
            description: 'Dedicated support',
        },
    ];

    return (
        <section className="product-advantages">
            <div className="advantage-list">
                {advantages.map((advantage) => (
                    <ProductAdvantage key={advantage.title} {...advantage} />
                ))}
            </div>
        </section>
    );
};

export default ProductAdvantages;
