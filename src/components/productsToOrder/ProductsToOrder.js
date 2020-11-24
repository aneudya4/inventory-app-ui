import React from 'react';
import numeral from 'numeral';
import './productsToOrder.css';
const ProductsToOrder = ({ product, quantity, deleteCartProduct }) => {
  const productTotal = parseFloat(product.unit_price) * parseInt(quantity);
  return (
    <div className='orders order-details '>
      <span>{product.product_name}</span>
      <span>{product.unit_price}</span>
      <span>{quantity}</span>
      <span>{numeral(productTotal).format('($0,0)')}</span>
      <span
        className='btn delete'
        onClick={() => deleteCartProduct(product.id)}
      >
        Delete
      </span>
    </div>
  );
};

export default ProductsToOrder;
