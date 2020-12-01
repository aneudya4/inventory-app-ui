import { shallow } from 'enzyme';

import AddProduct from './AddProduct.js';

describe('Test on the <AddProduct/> Component', () => {
  it('renders AddProduct without crashing', () => {
    const wrapper = shallow(<AddProduct />);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
  });
});
