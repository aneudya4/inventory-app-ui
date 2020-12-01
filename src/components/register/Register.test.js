import { shallow } from 'enzyme';

import Register from './Register.js';

describe('Test on the <Register/> Component', () => {
  it('renders Register without crashing', () => {
    const wrapper = shallow(<Register />);
    const RegisterButton = wrapper.find('button').at(0);
    expect(wrapper.find('form').exists()).toBe(true);
    expect(wrapper).toMatchSnapshot();
    expect(RegisterButton.text()).toBe('Register');
  });
});
