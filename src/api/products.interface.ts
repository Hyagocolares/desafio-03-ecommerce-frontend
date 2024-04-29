// api/products.interface.ts

interface Product {
    id: number;
    name: string;
    sku: string;
    categoryId: number;
    description: string;
    largeDescription: string;
    price: string;
    discontPrice: string | null;
    discontPercent: number | null;
    isNew: boolean;
    imageLink: string;
    otherImagesLink: string[] | string;
    star: number;
    review: number;
    size: string;
    color: string;
    amount: number;
    tags: string;
  }
  
  export default Product;
  