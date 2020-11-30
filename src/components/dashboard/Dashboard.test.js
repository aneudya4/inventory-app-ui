import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme';

import Dashboard, { useDashboardMethods } from './Dashboard';

describe('Test on the <Dashboard/> Component', () => {
  it('renders Dashboard without crashing', () => {
    const wrapper = shallow(<Dashboard />);

    expect(wrapper).toMatchSnapshot();
  });

  describe('useDashboardMethods', () => {
    let setState;
    let DashboardMock;
    beforeEach(() => {
      setState = jest.fn();
      const useStateSpy = jest.spyOn(React, 'useState');
      useStateSpy.mockImplementation((init) => [init, setState]);

      // mockin the Dashboad component
      DashboardMock = () => {
        return <div addNewProduct={(product) => setState(product)} />;
      };
    });

    it('should add a new product', () => {
      const container = shallow(<DashboardMock />);
      const product = { id: 1, description: 'Hey there' };
      container.props().addNewProduct(product);
      expect(setState).toHaveBeenCalledWith(product);
    });
  });
});
