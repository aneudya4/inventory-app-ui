import { shallow } from 'enzyme';

import Login from './Login';

describe('Test on the <Login/> Component', () => {
  const wrapper = shallow(<Login />);

  it('renders App without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
