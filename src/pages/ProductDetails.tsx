import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import FeaturedProducts from "../components/home/FeaturedProducts";
import fetchProductById from "../api/fetchProductById";
import Product from "../api/products.interface";

import facebook from "../assets/icons/VectorFacebook.svg";
import linkdin from "../assets/icons/VectorLinkedin.svg";
import twitter from "../assets/icons/VectorTwitter.svg";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product>();
  const [mainImage, setMainImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetchProductById(id ?? "", setProduct);
    };
    fetchData();
  }, [id, setProduct]);

  const handleThumbnailClick = (imageLink: string) => {
    setMainImage(imageLink);
  };


  const handleQuantityChange = (action: "add" | "subtract") => {
    if (product) {
      let updatedAmount = product.amount ?? 0;

      if (action === "add") {
        updatedAmount++;
      } else if (action === "subtract" && updatedAmount > 1) {
        updatedAmount--;
      }

      setProduct((prevProduct) => {
        if (prevProduct) {
          return { ...prevProduct, amount: updatedAmount };
        }
        return prevProduct;
      });
    }
  };



  if (!product) {
    return <div>Carregando...</div>;
  }

  const otherImages = Array.isArray(product.otherImagesLink)
    ? product.otherImagesLink.map((link) => link.replace(/[{}"]/g, "").trim())
    : product.otherImagesLink
      .replace(/[{}"]/g, "")
      .split(",")
      .map((link) => link.trim());

  const otherDescrition = Array.isArray(product.largeDescription)
    ? product.largeDescription.map((link) => link.replace(/[{}"]/g, "").trim())
    : product.largeDescription
      .replace(/[{}"]/g, "")
      .split(";")
      .map((link) => link.trim());

  return (
    <div>
      <div className="product-details-container">
        <div className="images">
          <div className="product-image-details">
            <img src={mainImage || product.imageLink} alt="Product" />
          </div>

          <ul className="product-thumbnails">
            {otherImages.map((image, index) => (
              <li key={index} onClick={() => handleThumbnailClick(image)}>
                <img src={image} alt={`Thumbnail ${index + 1}`} />
              </li>
            ))}
          </ul>
        </div>
        <div className="content-images">
          <div className="product-info">
            <h2>{product.name}</h2>

            <p className="price">
              <span className="original-price">Price: ${product.price}</span>
              {product.discontPrice && (
                <span className="discounted-price">
                  Discount: ${product.discontPrice} ( -{product.discontPercent}%)
                </span>
              )}
            </p>

            <div className="product-highlights">
              <ul>
                {product.star && (
                  <li className="star-rating">
                    {Array.from({ length: 5 }, (_, index) => (
                      <svg
                        key={index}
                        className={`star-icon ${index < product.star ? "filled" : ""
                          }`}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2l2.949 9.15 9.681.574-7.396 5.4 2.22 9.351-8.454-6.072-8.454 6.072 2.22-9.351-7.396-5.4 9.681-.574zm0 0"
                        />
                      </svg>
                    ))}
                  </li>
                )}
                <li>{product.review} Customer Review</li>
              </ul>
            </div>

            <div className="product-description">
              <p>{product.description}</p>
            </div>

            <div className="product-option">
              <p>{product.color}</p>
            </div>

            <div className="product-actions">
              <button
                className="add-button"
                onClick={() => handleQuantityChange("subtract")}
              >
                -
              </button>
              <input
                type="number"
                value={product.amount}
                onChange={(e) => {
                  const newValue = Number(e.target.value);
                  if (newValue < product.amount) {
                    handleQuantityChange("add");
                  } else if (newValue > product.amount) {
                    handleQuantityChange("subtract");
                  }
                }}
              />


              <button
                className="subtract-button"
                onClick={() => handleQuantityChange("add")}
              >
                +
              </button>

              <button>Add To Cart</button>
              <button>+ Compare</button>
            </div>

          </div>

          <hr />

          <div className="additional-information">
            <ul>
              <li>SKU: {product.sku}</li>
              <li>Size: {product.size}</li>
              <li>Color: {product.color}</li>
              <li>Tags: {product.tags}</li>
              <li>
                Share: <img src={facebook} alt="Product" />{" "}
                <img src={linkdin} alt="Product" />{" "}
                <img src={twitter} alt="Product" />
              </li>
            </ul>
          </div>
        </div>

      </div>
      <hr />
      <div className="product-descrition-container">
        <h1>Description</h1>
        <ul className="product-descrition-large">
          {otherDescrition.map((text) => (
            <li>
              <p>{text}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <FeaturedProducts
          text={"Related Products"}
          limit={4}
          products={[product]}
        />
      </div>
    </div>
  );
};

export default ProductDetails;
