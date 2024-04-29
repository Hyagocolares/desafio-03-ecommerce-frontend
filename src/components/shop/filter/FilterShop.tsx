// src/components/shop/filter/FilterShop.tsx
import React, { useEffect, useRef, useState } from "react";
import "./FilterShop.css";

import FilterButton from "./FilterButton";
import Select from "./Select";
import Text from "./Text";
import FilterOptions from "./FilterOptions";
import Product from "../../../api/products.interface";
import Category from "../../../api/categories.interface";

import VectorFilterShop from "../../../assets/icons/VectorFilterShop.svg";
import VectorGrid from "../../../assets/icons/VectorGrid.svg";
import VectorRow from "../../../assets/icons/VectorRow.svg";
import fetchCategories from "../../../api/fetchCategories";
import fetchProductsAll from "../../../api/fetchProductsALL";

interface Props {
  onPerPageChange: (value: string) => void;
  onSortByChange?: (value: string) => void;
  onClassifiedChange: (value: string) => void;
  onColorChange: (value: string) => void;
  perPage: number;
  currentPage: number;
  totalPageCount: number;
}

const FilterShop: React.FC<Props> = ({
  onPerPageChange,
  onSortByChange,
  onClassifiedChange,
  onColorChange,
  perPage,
  currentPage,
  totalPageCount,
}) => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedPerPage, setSelectedPerPage] = useState("16");
  const [selectedSortBy, setSelectedSortBy] = useState("Default");

  const [selectedClassified, setSelectedClassified] = useState("");

  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      fetchCategories(setCategories);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      fetchProductsAll(setProducts);
    };

    fetchData();
  }, []);

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSortByChangeRef = useRef(onSortByChange || (() => {}));

  const handleFilterOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    setSelectedSortBy(option);
    handleSortByChangeRef.current(option);
  };

  const handlePerPageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedPerPage(value);
    onPerPageChange(value);
  };

  const handleClassifiedChange = (
    valueClassifed: string | React.ChangeEvent<HTMLButtonElement>
  ) => {
    if (typeof valueClassifed === "string") {
      setSelectedClassified(
        valueClassifed == selectedClassified ? "" : valueClassifed
      );
      onClassifiedChange(
        valueClassifed == selectedClassified ? "" : valueClassifed
      );
    } else {
      const value = valueClassifed.target.value;
      setSelectedClassified((prevValue) => (prevValue === value ? "" : value));
    }
  };

  const handleColorChange = (
    valueColor: string | React.ChangeEvent<HTMLButtonElement>
  ) => {
    if (typeof valueColor === "string") {
      setSelectedColor(valueColor == selectedColor ? "" : valueColor);
      onColorChange(valueColor == selectedColor ? "" : valueColor);
    } else {
      setSelectedColor(valueColor.target.value);
    }
  };

  const handleCategoryChange = (
    value: string | React.ChangeEvent<HTMLButtonElement>
  ) => {
    if (typeof value === "string") {
      setSelectedCategory(value == selectedCategory ? "" : value);
    } else {
      setSelectedCategory(value.target.value);
    }
  };

  const filterOptions = categories.map((category) => category.name);
  const filterColorOptions = products.map((product) => product.color);

  return (
    <div className="filter-shop">
      <div className="filter-buttons">
        <div className="buttons-filter">
          <FilterButton
            icon={VectorFilterShop}
            label="Filter"
            onClick={handleFilterToggle}
            classText=""
          />
          <FilterButton
            icon={VectorGrid}
            label=""
            onClick={() => console.log("Grid button clicked")}
            classText="grid-img"
          />
          <FilterButton
            icon={VectorRow}
            label=""
            onClick={() => console.log("Row button clicked")}
            classText=""
          />
          <p className="traco">|</p>
          <Text
            numStart={currentPage}
            numEnd={perPage}
            numFull={totalPageCount}
          />
        </div>
        <div className="select-filter">
          <div className="filter-select-group">
            <p>Show</p>
            <Select
              options={["16", "32", "64"]}
              value={selectedPerPage}
              onChange={handlePerPageChange}
            />
          </div>
          <div className="filter-select-group">
            <p>Short by</p>
            <Select
              options={["Crescent", "Decrescent"]}
              value={selectedSortBy}
              onChange={handleFilterOption}
            />
          </div>
        </div>
      </div>
      {isFilterOpen && (
        <div className="filter-options">
          <FilterOptions
            title="Classified"
            options={["Price", "Alphabet"]}
            selectedOption={selectedClassified}
            onChange={handleClassifiedChange}
          />
          <FilterOptions
            title="Color"
            options={filterColorOptions}
            selectedOption={selectedColor}
            onChange={handleColorChange}
          />
          <FilterOptions
            title="Category"
            options={filterOptions}
            selectedOption={selectedCategory}
            onChange={handleCategoryChange}
          />
        </div>
      )}
    </div>
  );
};

export default FilterShop;
