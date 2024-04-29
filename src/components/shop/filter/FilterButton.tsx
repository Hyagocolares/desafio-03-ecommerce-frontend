// src/components/shop/FilterButton.tsx
import React from 'react';

interface FilterButtonProps {
  icon: string;
  label: string;
  onClick: () => void;
  classText: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ icon, label, onClick, classText }) => {
  return (
    <button className={`filter-button ${classText}`} onClick={onClick}>
      <img src={icon} alt="" />
      <p>{label}</p>
    </button>
  );
};

export default FilterButton;
