import React from 'react';
import ProductsToOrder from '../productsToOrder/ProductsToOrder';
import './placeOrder.css';
import config from '../config';
const PlaceOrder = ({ products, cart, userId, addNewOrder, history }) => {
  const productDetails = cart.map((c) => products.find((p) => p.id === c.id));
  const onSubmit = (e) => {
    e.preventDefault();
    const { client_name, client_email } = e.target.elements;
    const order = {
      client: client_name.value,
      client_email: client_email.value,
      user_id: userId,
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
        console.error({ error });
      });
  };
  return (
    <div className='place-order'>
      <form onSubmit={onSubmit}>
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
        <div className='order-headers'>
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
        </div>
        <div className='order-details new-order'>
          {productDetails.map((p, i) => (
            <ProductsToOrder
              key={p.id}
              product={p}
              cart={cart}
              quantity={cart[i].quantity}
            />
          ))}
        </div>

        <button className='btn'>Submit</button>
      </form>
    </div>
  );
};

export default PlaceOrder;