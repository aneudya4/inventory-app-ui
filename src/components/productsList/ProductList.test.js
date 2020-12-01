import { shallow } from 'enzyme';

import ProductsList from './ProductsList.js';

describe('Test on the <ProductList/> Component', () => {
  it('renders ProductList without crashing', () => {
    const testProduct = [
      {
        id: 1,
        product_name: 'Iphone 12 Pro',
        user_id: 1,
        unit_price: '799.99',
        description: '64GB',
        stock_total: 18,
        provider: 'Apple',
      },
    ];

    const wrapper = shallow(<ProductsList products={testProduct} />);

    expect(wrapper).toMatchSnapshot();
  });
});
