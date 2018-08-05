import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { Header } from '../../components/Header';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header startLogOut={() => { }} />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogOut on button click', () => {
  const startLogOut = jest.fn();
  const wrapper = shallow(<Header startLogOut={startLogOut} />);
  wrapper.find('button').simulate('click');
  expect(startLogOut).toHaveBeenCalled();
});