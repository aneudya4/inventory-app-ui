import React, { useState } from 'react';
const ProductForms = ({ userId, history, addNewProduct, product }) => {
  const [name, setName] = useState(product ? product.product_name : '');
  const [price, setPrice] = useState(product ? product.unit_price : '');
  const [stock, setStock] = useState(product ? product.stock_total : '');
  const [description, setDescription] = useState(
    product ? product.description : ''
  );
  const [provider, setProvider] = useState(product ? product.provider : '');
  return (
    <>
      <label>
        name:
        <input
          type='text'
          name='product_name'
          placeholder='Iphone'
          required
          value={product ? name : undefined}
          onChange={product ? (e) => setName(e.target.value) : null}
        />
      </label>
      <label>
        Price:
        <input
          type='number'
          name='product_price'
          placeholder='699.99'
          required
          onChange={product ? (e) => setPrice(e.target.value) : null}
          value={product ? price : product}
          min={1}
        />
      </label>
      <label>
        Description:
        <input
          type='text'
          name='product_description'
          placeholder='Iphone 8+ 64GB'
          onChange={product ? (e) => setDescription(e.target.value) : null}
          value={product ? description : product}
        />
      </label>
      <label>
        Quantity:
        <input
          type='number'
          name='product_stock'
          placeholder='20'
          required
          min={0}
          max={999}
          onChange={product ? (e) => setStock(e.target.value) : null}
          value={product ? stock : product}
        />
      </label>

      <label>
        Provider:
        <input
          type='text'
          name='product_provider'
          placeholder='Apple'
          required
          value={product ? provider : product}
          onChange={product ? (e) => setProvider(e.target.value) : null}
        />
      </label>
      <button className='btn'>Add Product</button>
    </>
  );
};
export default ProductForms;
