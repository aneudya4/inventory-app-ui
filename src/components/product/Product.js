import React, { useState } from 'react';
import config from '../config';
import { Link } from 'react-router-dom';
import numeral from 'numeral';

const Product = ({ product, updateProducts, history, addToCart }) => {
  const [input, setInput] = useState(1);
  const [error, setError] = useState(false);

  const onClickAdd = (product) => {
    if (input < 0 || product.stock_total < input) {
      setError(true);
      return;
    }
    setError(false);
    const productForCart = {
      id: product.id,
      quantity: parseInt(input),
    };
    addToCart(productForCart);
  };
  const onClickEdit = (userId, productId) => {
    fetch(`${config.API_ENDPOINT}/products/${userId}/${productId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((products) => {
        updateProducts(products);
        history.push('/auth/dashboard/products');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <li>
      <span>
        Product Name: <strong>{product.product_name}</strong>
      </span>
      <span>
        Product Price:
        <strong>{numeral(product.unit_price).format('($0,0)')}</strong>
      </span>
      <span>
        Description:<strong>{product.description}</strong>
      </span>
      <label>
        order quantity
        <input
          onChange={(e) => setInput(e.target.value)}
          type='number'
          value={input}
          max={product.stock_total}
          min={1}
        />
        {error && (
          <span className='validation-errors'>
            {`Quantity cant be less than 0 or more than ${product.stock_total}`}
          </span>
        )}
      </label>
      <Link className='btn' to={`/auth/dashboard/edit-product/${product.id}`}>
        Edit
      </Link>
      <button
        onClick={() => onClickEdit(product.user_id, product.id)}
        className='btn'
      >
        Delete
      </button>
      <button onClick={() => onClickAdd(product)} className='btn'>
        Add to order
      </button>
    </li>
  );
};

export default Product;