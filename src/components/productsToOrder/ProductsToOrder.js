import React from 'react';
import './productsToOrder.css';
const ProductsToOrder = ({ product, quantity }) => {
  return (
    <div className='orders'>
      <span>{product.product_name}</span>
      <span>{product.unit_price}</span>
      <span>{quantity}</span>
      <span>{product.description}</span>
    </div>
  );
};

export default ProductsToOrder;
