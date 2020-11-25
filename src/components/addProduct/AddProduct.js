import React from 'react';
import config from '../config';
import ProductForms from '../productsForm/ProductsForm';
import './addProduct.css';
const AddProduct = ({ userId, history, addNewProduct }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      product_name,
      product_price,
      product_description,
      product_stock,
      product_provider,
    } = e.target.elements;
    const product = {
      product_name: product_name.value,
      unit_price: parseFloat(product_price.value),
      description: product_description.value,
      stock_total: parseInt(product_stock.value),
      provider: product_provider.value,
      user_id: userId,
    };
    console.log(product, 'MMG');
    fetch(`${config.API_ENDPOINT}/products/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((product) => {
        addNewProduct(product);
        history.push('/auth/dashboard/products');
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  return (
    <div className='add-product'>
      <h3> Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <ProductForms />
      </form>
    </div>
  );
};
export default AddProduct;
