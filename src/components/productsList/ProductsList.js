import React from 'react';
import Product from '../product/Product';
import './productList.css';

const ProductsList = ({ products, updateProducts, addToCart }) => {
  return (
    <div className='product-list'>
      <ul>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              updateProducts={updateProducts}
              addToCart={addToCart}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
