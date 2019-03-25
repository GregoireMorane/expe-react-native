import React from 'react';
import { shallow } from 'enzyme';
import { Text, View } from 'react-native';

import App from '../App';

describe('App', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View));
  });

  describe('within View', () => {
    it('renders Text with text "Aucun article"', () => {
      const txt = shallow(<App />);
      expect(
        txt
          .find(Text)
          .at(0)
          .props().children
      ).toEqual('Aucun article');
    });
  });
});
