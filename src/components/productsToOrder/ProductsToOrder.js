import React, { useState } from 'react';
const ProductsToOrder = ({ product, quantity }) => {
  //   const quantity = cart.filter((p) => p.id === product.id);
  //   console.log(quantity, cart, product.id);
  //   console.log(cart);
  return (
    <>
      {product.product_name}
      {product.unit_price}
      {product.description}
      {quantity}
    </>
  );
};

export default ProductsToOrder;
