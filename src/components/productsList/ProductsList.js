import React from 'react';
import Product from '../product/Product';
import './productList.css';

const ProductsList = ({ products, deleteProduct, addToCart }) => {
  return (
    <div className='product-list'>
      <h3>Products</h3>
      <ul>
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              deleteProduct={deleteProduct}
              addToCart={addToCart}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
