import React from 'react';
import ProductCard from './ProductCard';

const ProductList = () => {
  const products = [
    { id: 1, name: 'Grade A Bananas', price: 20 },
    { id: 2, name: 'Grade B Bananas', price: 15 },
  ];

  return (
    <div>
      <h1>Product Catalog</h1>
      <div>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
