import React from 'react';
import config from '../config';
import ProductForms from '../productsForm/ProductsForm';
const EditProduct = ({ match, history, products, editProduct }) => {
  const product = products.find(
    (product) => product.id === parseInt(match.params.productId)
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      product_name,
      product_price,
      product_description,
      product_stock,
      product_provider,
    } = e.target.elements;
    const updatedProduct = {
      id: parseInt(match.params.productId),
      product_name: product_name.value,
      unit_price: parseFloat(product_price.value),
      description: product_description.value,
      stock_total: parseInt(product_stock.value),
      provider: product_provider.value,
      user_id: parseInt(product.user_id),
    };
    fetch(`${config.API_ENDPOINT}/products/${updatedProduct.user_id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${config.API_KEY}`,
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((product) => {
        editProduct(product);
        history.push('/auth/dashboard/products');
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className='add-product'>
      <form onSubmit={handleSubmit}>
        <h3> edit Product</h3>
        <ProductForms product={product} />
      </form>
    </div>
  );
};
export default EditProduct;
