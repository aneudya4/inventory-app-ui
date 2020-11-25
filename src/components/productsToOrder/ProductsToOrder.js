import React from 'react';
import { formatter } from '../ultils/index';
import './productsToOrder.css';
const ProductsToOrder = ({ product, quantity, deleteCartProduct }) => {
  const productTotal =
    parseFloat(product.unit_price) * parseInt(quantity).toString();

  return (
    <div className='orders order-details '>
      <span>{product.product_name}</span>
      <span>{formatter.format(product.unit_price)}</span>
      <span>{quantity}</span>
      <span>{formatter.format(productTotal)}</span>
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
