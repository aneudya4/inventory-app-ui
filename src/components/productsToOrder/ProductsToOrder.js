import React from 'react';
import { formatter } from '../ultils/index';
import './productsToOrder.css';
const ProductsToOrder = ({ product, quantity, deleteCartProduct }) => {
  const productTotal =
    parseFloat(product.unit_price) * parseInt(quantity).toString();

  return (
    <div className='orders order-details '>
      <span
        className='btn delete'
        onClick={() => deleteCartProduct(product.id)}
      >
        <i class='fas fa-trash'></i>{' '}
      </span>
      <span>{product.product_name}</span>
      <span>{formatter.format(product.unit_price)}</span>
      <span>{quantity}</span>
      <span>{formatter.format(productTotal)}</span>
    </div>
  );
};

export default ProductsToOrder;
