import React, { useEffect, useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Overview from '../overview/Overview';
import DashboardOptions from '../dashboardOptions/DashboardOptions';
import ProductsList from '../productsList/ProductsList';
import EmptyList from '../emptyList/EmptyList';
import PastOrdersList from '../pastOrdersList/PastOrdersList';
import AddProduct from '../addProduct/AddProduct';
import EditProduct from '../editProduct/EditProduct';
import PlaceOrder from '../place-order/PlaceOrder';
import Notification from '../notification/Notification';

import apiContext from '../../apiContext';
import config from '../config';

import './dashboard.css';

const Dashboard = (props) => {
  const [userDbData, setUserDbData] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);
  const [errors, setErrors] = useState(false);
  const { user } = useContext(apiContext);
  const [showNotification, setShowNotification] = useState(false);

  const addNewOrder = (order) => {
    const newOrder = [...orders, order];
    setOrders(newOrder);
    setCart([]);
  };
  const handleAddToCart = (product) => {
    const productInCart = cart.find((p) => p.id === product.id);
    const filteredCart = cart.filter((p) => p.id !== product.id);

    setShowNotification(true);
    if (productInCart) {
      productInCart.quantity = productInCart.quantity + product.quantity;
      filteredCart.push(productInCart);
      setCart(filteredCart);
    } else {
      filteredCart.push(product);
      setCart(filteredCart);
    }
    setTimeout(() => {
      setShowNotification(false);
    }, 1000);
  };

  const deleteCartProduct = (id) => {
    const updatedCart = cart.filter((p) => p.id !== id);
    setCart(updatedCart);
  };

  const addNewProduct = (product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
  };
  const editProduct = (updatedProduct) => {
    const newProducts = products.filter(
      (product) => product.id !== updatedProduct.id
    );
    newProducts.push(updatedProduct);
    setProducts(newProducts);
  };

  useEffect(() => {
    if (user !== null) {
      fetch(`${config.API_ENDPOINT}/users/${user.email}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`,
        },
      })
        .then((data) => data.json())
        .then(({ id, name }) => {
          const newUserData = { ...user, id, name };
          setUserDbData(newUserData);
        });
    }
  }, [user]);

  useEffect(() => {
    if (userDbData !== null) {
      fetch(`${config.API_ENDPOINT}/products/${userDbData.id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((DBProducts) => {
          if (DBProducts) {
            return setProducts(DBProducts);
          }
        })
        .catch((error) => {
          setErrors(true);
          setProducts([]);
          console.error(error);
        });
    }
  }, [userDbData, setProducts]);

  useEffect(() => {
    if (userDbData !== null) {
      fetch(`${config.API_ENDPOINT}/orders/${userDbData.id}`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${config.API_KEY}`,
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((orders) => {
          if (orders) {
            setOrders(orders);
          }
        })
        .catch((error) => {
          setErrors(true);
          setOrders([]);
        });
    }
  }, [userDbData, setProducts]);

  if (!user) {
    return <Redirect to='/accounts/login' />;
  }
  return (
    <div className='dashboard'>
      {showNotification && <Notification message='added' />}
      <Route path={`${props.match.path}`} component={DashboardOptions} />
      <Route
        path={`${props.match.path}/overview`}
        render={(routerProps) => (
          <Overview {...routerProps} products={products} orders={orders} />
        )}
      />
      <Route
        path={`${props.match.path}/products`}
        render={(routerProps) =>
          products.length > 0 ? (
            <ProductsList
              {...routerProps}
              updateProducts={setProducts}
              products={products}
              orders={orders}
              addToCart={handleAddToCart}
            />
          ) : (
            <EmptyList message={'NO PRODUCTS TO SHOW'} />
          )
        }
      />
      <Route
        path={`${props.match.path}/past-order`}
        render={(routerProps) =>
          orders.length > 0 ? (
            <PastOrdersList {...routerProps} orders={orders} />
          ) : (
            <EmptyList message={'NO ORDERS TO SHOW'} />
          )
        }
      />
      <Route
        path={`${props.match.path}/add-products`}
        render={(routerProps) => (
          <AddProduct
            {...routerProps}
            userId={userDbData.id}
            addNewProduct={addNewProduct}
          />
        )}
      />
      <Route
        path={`${props.match.path}/edit-product/:productId`}
        render={(routerProps) => (
          <EditProduct
            {...routerProps}
            editProduct={editProduct}
            products={products}
          />
        )}
      />
      <Route
        path={`${props.match.path}/order`}
        render={(routerProps) => (
          <PlaceOrder
            {...routerProps}
            products={products}
            cart={cart}
            addNewOrder={addNewOrder}
            deleteCartProduct={deleteCartProduct}
            userId={userDbData.id}
          />
        )}
      />
    </div>
  );
};

export default Dashboard;
