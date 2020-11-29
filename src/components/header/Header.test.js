import { shallow } from 'enzyme';
import * as ApiContext from '../../apiContext';
import Header from './Header';

describe('Test on the <Header/> Component', () => {
  it('renders Header without crashing', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();
  });
});
