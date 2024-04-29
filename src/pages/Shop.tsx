import React, { useEffect, useState } from "react";
import "./Shop.css";
import CardProduct from "../components/home/cardProduct";
import BannerShop from "../components/shop/BannerShop";
import FilterShop from "../components/shop/filter/FilterShop";
import Pagination from "../components/shop/Pagination";
import ProductAdvantages from "../components/ProductAdvantages";
import Product from "../api/products.interface";
import fetchProducts from "../api/fetchProducts";

const Shop: React.FC = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPageCount, setTotalPageCount] = useState(1);
  const [perPage, setPerPage] = useState(16);
  const [selectedSortBy, setSelectedSortBy] = useState("Crescent");

  const [filter, setFilter] = useState("Default");

  const [selectedClassified, setSelectedClassified] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      await fetchProducts(currentPage, perPage, setProducts, setTotalPageCount);
    };

    fetchData();
  }, [currentPage, perPage, setProducts, setTotalPageCount]); 


  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handlePerPageChange = (value: string) => {
    setPerPage(Number(value));
    setCurrentPage(1);
  };

  const handleSortByChange = (option: string) => {
    setSelectedSortBy(option);
  };

  const handleClassifiedChange = (valueClassifed: string) => {
    setSelectedClassified(valueClassifed);
  };

  const handleColorChange = (valueColor: string) => {
    setSelectedColor(valueColor);
  };

  const sortedProducts = (products as Product[]).map((product) => product);

  switch (selectedSortBy) {
    case "Crescent":
      sortedProducts.sort();
      break;
    case "Decrescent":
      sortedProducts.sort().reverse();
      break;
    default:
      break;
  }

  let filteredProducts = [...sortedProducts];
  if (selectedClassified === "Price") {
    if (selectedSortBy === "Crescent") {
      console.log(selectedSortBy);
      filteredProducts = filteredProducts.sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      );
    } else {
      filteredProducts = filteredProducts.sort(
        (a, b) => parseFloat(b.price) - parseFloat(a.price)
      );
    }
  } else if (selectedClassified === "Alphabet") {
    if (selectedSortBy === "Crescent") {
      console.log(selectedSortBy);
      filteredProducts = filteredProducts.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    } else {
      filteredProducts = filteredProducts.sort((a, b) =>
        b.name.localeCompare(a.name)
      );
    }
  }
  const filteredColorProducts = filteredProducts.filter((product) => {
    if (selectedColor !== "") {
      return product.color === selectedColor;
    }
    return true;
  });

  return (
    <div className="shop">
      <BannerShop />
      <main className="shop-content">
        <FilterShop
          onPerPageChange={handlePerPageChange}
          onSortByChange={handleSortByChange}
          onClassifiedChange={handleClassifiedChange}
          onColorChange={handleColorChange}
          perPage={perPage}
          currentPage={currentPage}
          totalPageCount={totalPageCount}
        />
        <div className="product-list ">
          {filteredColorProducts
            .map((product: any) => (
              <CardProduct key={product} product={product} />
            ))
            .slice(0, perPage)}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPageCount={totalPageCount}
          onPageChange={handlePageChange}
        />
      </main>
      <ProductAdvantages />
    </div>
  );
};

export default Shop;
