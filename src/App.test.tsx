import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './components/Layout';

test('should contain one <Layout /> component', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Layout)).toHaveLength(1);
});
