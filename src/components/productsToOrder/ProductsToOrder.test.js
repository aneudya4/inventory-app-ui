import { shallow } from 'enzyme';

import ProductsToOrder from './ProductsToOrder.js';

describe('Test on the <ProductsToOrder/> Component', () => {
  it('renders ProductsToOrder without crashing', () => {
    const testProduct = {
      id: 1,
      product_name: 'Iphone 12 Pro',
      user_id: 1,
      unit_price: '799.99',
      description: '64GB',
      stock_total: 18,
      provider: 'Apple',
    };
    const wrapper = shallow(<ProductsToOrder product={testProduct} />);
    // expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
