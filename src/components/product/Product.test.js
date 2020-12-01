import { shallow } from 'enzyme';

import Product from './Product';

describe('Test on the <Product/> Component', () => {
  it('renders Product without crashing', () => {
    const testProduct = {
      id: 1,
      product_name: 'Iphone 12 Pro',
      user_id: 1,
      unit_price: '799.99',
      description: '64GB',
      stock_total: 18,
      provider: 'Apple',
    };

    const wrapper = shallow(<Product product={testProduct} />);

    expect(wrapper).toMatchSnapshot();
  });
});
