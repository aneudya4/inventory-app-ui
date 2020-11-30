import { shallow } from 'enzyme';

import Overview from './Overview';

describe('Test on the <Overview/> Component', () => {
  it('renders Overview without crashing', () => {
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
    const testOrder = [
      {
        id: 1,
        user_id: 1,
        client: 'Rita',
        client_email: 'Rita@gmail.com',
        order_total: '2843',
        created_at: '2020-11-28T07:35:41.291Z',
      },
    ];
    const wrapper = shallow(
      <Overview products={testProduct} orders={testOrder} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
