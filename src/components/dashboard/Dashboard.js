import React, { useEffect, useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Overview from '../overview/Overview';
import DashboardOptions from '../dashboardOptions/DashboardOptions';
import ProductsList from '../productsList/ProductsList';
import EmptyList from '../emptyList/EmptyList';
import OrdersHistoryList from '../orders-historyList/OrdersHistoryList';
import AddProduct from '../addProduct/AddProduct';
import EditProduct from '../editProduct/EditProduct';
import PlaceOrder from '../place-order/PlaceOrder';
import Notification from '../notification/Notification';
import apiContext from '../../apiContext';
import config from '../config';
import './dashboard.css';

const Dashboard = ({ match, history }) => {
  const { user } = useContext(apiContext);
  const [userDbData, setUserDbData] = useState(null);
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const [cart, setCart] = useState([]);
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
    }, 1500);
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

  const deleteProduct = (productId) => {
    const filteredProducts = products.filter(
      (product) => product.id !== productId.id
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    if (!!user) {
      const fetchUserData = async () => {
        try {
          const data = await fetch(
            `${config.API_ENDPOINT}/users/${user.email}`,
            {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${config.API_KEY}`,
              },
            }
          );
          const { id, name } = await data.json();
          const newUserData = { ...user, id, name };
          setUserDbData(newUserData);
        } catch (error) {
          history.push('/server-error');
        }
      };
      fetchUserData();
    }
  }, [user, history]);

  useEffect(() => {
    if (userDbData) {
      const fetchProducts = async () => {
        try {
          const data = await fetch(
            `${config.API_ENDPOINT}/products/${userDbData.id}`,
            {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${config.API_KEY}`,
              },
            }
          );
          const productsJson = await data.json();
          setProducts(productsJson);
        } catch (error) {
          history.push('/server-error');
        }
      };
      fetchProducts();
    }
  }, [userDbData, history]);

  useEffect(() => {
    if (userDbData) {
      try {
        const fetchOrders = async () => {
          const data = await fetch(
            `${config.API_ENDPOINT}/orders/${userDbData.id}`,
            {
              method: 'GET',
              headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${config.API_KEY}`,
              },
            }
          );
          const ordersJson = await data.json();
          setOrders(ordersJson);
        };
        fetchOrders();
      } catch (error) {
        history.push('/server-error');
      }
    }
  }, [userDbData, history]);

  if (user === null) {
    return <Redirect to='/accounts/login' />;
  }

  return (
    <div className='dashboard'>
      <Notification message='added' showNotification={showNotification} />
      <Route path={`${match.path}`} component={DashboardOptions} />
      <Route
        path={`${match.path}/overview`}
        render={(routerProps) => (
          <Overview
            {...routerProps}
            products={products}
            user={user}
            orders={orders}
          />
        )}
      />
      <Route
        path={`${match.path}/products`}
        render={(routerProps) =>
          products.length > 0 ? (
            <ProductsList
              {...routerProps}
              deleteProduct={deleteProduct}
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
        path={`${match.path}/order-history`}
        render={(routerProps) =>
          orders.length > 0 ? (
            <OrdersHistoryList {...routerProps} orders={orders} />
          ) : (
            <EmptyList message={'NO ORDERS TO SHOW'} />
          )
        }
      />
      <Route
        path={`${match.path}/add-products`}
        render={(routerProps) => (
          <AddProduct
            {...routerProps}
            user={userDbData}
            addNewProduct={addNewProduct}
          />
        )}
      />
      <Route
        path={`${match.path}/edit-product/:productId`}
        render={(routerProps) => (
          <EditProduct
            {...routerProps}
            editProduct={editProduct}
            products={products}
          />
        )}
      />
      <Route
        path={`${match.path}/order`}
        render={(routerProps) => (
          <PlaceOrder
            {...routerProps}
            products={products}
            cart={cart}
            addNewOrder={addNewOrder}
            deleteCartProduct={deleteCartProduct}
            user={userDbData}
          />
        )}
      />
    </div>
  );
};

export default Dashboard;
