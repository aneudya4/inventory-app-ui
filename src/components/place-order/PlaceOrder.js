import React, { useState } from 'react';
import ProductsToOrder from '../productsToOrder/ProductsToOrder';
import './placeOrder.css';
import { formatter } from '../ultils/index';
import config from '../config';
const PlaceOrder = ({
  products,
  cart,
  user,
  addNewOrder,
  history,
  deleteCartProduct,
}) => {
  const [orderError, setOrderError] = useState('');

  const productDetails = cart.map((c) => products.find((p) => p.id === c.id));
  const orderTotal = productDetails.reduce((a, b, i) => {
    return parseFloat(a) + parseFloat(b.unit_price) * cart[i].quantity;
  }, 0);

  const onSubmit = (e) => {
    e.preventDefault();
    const { client_name, client_email } = e.target.elements;
    const order = {
      client: client_name.value,
      client_email: client_email.value,
      user_id: user.id,
      products: cart,
    };
    fetch(`${config.API_ENDPOINT}/orders/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((order) => {
        addNewOrder(order);
        history.push('/auth/dashboard/overview');
      })
      .catch((error) => {
        setOrderError(error.message);
      });
  };
  return (
    <div className='place-order'>
      <form id='place-order-form' onSubmit={onSubmit}>
        <label>
          Client name:
          <input
            type='text'
            name='client_name'
            placeholder='clients name'
            required
          />
        </label>
        <label>
          Client Email:
          <input
            type='email'
            name='client_email'
            placeholder='clients name'
            required
          />
        </label>
        <button className='btn'>Submit</button>
        {orderError && <span className='validation-errors'>{orderError}</span>}
        <div className='order-headers'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        <div className='new-order'>
          {productDetails.map((p, i) => (
            <ProductsToOrder
              key={p.id}
              product={p}
              cart={cart}
              deleteCartProduct={deleteCartProduct}
              quantity={cart[i].quantity}
            />
          ))}
        </div>
        <div className='order-total'>
          <span>Total: {formatter.format(orderTotal)}</span>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
