// src/components/home/FeaturedProducts.tsx
import "./FeaturedProducts.css";
import { Link } from 'react-router-dom';
import CardProduct from './cardProduct';
import Product from "../../api/products.interface";

interface FeaturedProductsProps {
  text: string,
  limit: number,
  products: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ text, limit, products }) => {

  return (
    <section className="featured-products">
      <h1>{text}</h1>
      <div className="product-list">
        {products.map((product: any) => (
          <CardProduct key={product.id} product={product} />
        )).slice(0, limit)}
      </div>
      <Link to='/shop/'>
        <button className="btt-showmore">Show More</button>
      </Link>
    </section>
  );
};

export default FeaturedProducts;
