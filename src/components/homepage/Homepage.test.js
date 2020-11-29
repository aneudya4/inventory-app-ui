import { shallow } from 'enzyme';
import Homepage from './Homepage';

describe('Test on the <Homepage/> Component', () => {
  it('renders Homepage without crashing', () => {
    const wrapper = shallow(<Homepage />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Homepage with the Link element for Register', () => {
    const wrapper = shallow(<Homepage />);
    const RegisterLink = wrapper.find('Link').at(0);
    expect(RegisterLink.text()).toBe('Register');
    expect(RegisterLink.props('href')).toEqual({
      to: '/accounts/register',
      children: 'Register',
    });
  });

  it('renders Homepage with the Link element for Login', () => {
    const wrapper = shallow(<Homepage />);
    const LoginLink = wrapper.find('Link').at(1);
    expect(LoginLink.text()).toBe('Login');
    expect(LoginLink.props()).toEqual({
      to: '/accounts/login',
      children: 'Login',
    });
  });
});
