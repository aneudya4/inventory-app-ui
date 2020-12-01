import React, { useState } from 'react';
import config from '../config';
import { Link, withRouter } from 'react-router-dom';
import { formatter } from '../ultils/index';

const Product = ({ product, deleteProduct, addToCart }) => {
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
  const onClickDelete = (userId, product) => {
    fetch(`${config.API_ENDPOINT}/products/${userId}/${product.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((e) => Promise.reject(e));
        }
        deleteProduct(product);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <li className={`${error ? 'no-stock' : null}`}>
      <span>
        Product Name: <strong>{product.product_name}</strong>
      </span>
      <span>
        Product Price:
        <strong>{formatter.format(product.unit_price)}</strong>
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
      </label>
      <Link className='btn' to={`/auth/dashboard/edit-product/${product.id}`}>
        Edit
      </Link>
      <button
        onClick={() => onClickDelete(product.user_id, product)}
        className='btn delete'
      >
        Delete
      </button>
      <button onClick={() => onClickAdd(product)} className='btn add'>
        Add to order
      </button>
      {error && (
        <span className='validation-errors'>{`Item is out of stock`}</span>
      )}
    </li>
  );
};

export default withRouter(Product);
