import React from 'react';
import Product from '../product/Product';
import { Link } from 'react-router-dom';
import config from '../config';

const ProductsList = ({ products, updateProducts, addToCart }) => {
  return (
    <div className='product-list'>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <Product
                product={product}
                updateProducts={updateProducts}
                addToCart={addToCart}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
