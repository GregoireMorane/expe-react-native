import React from 'react';
import { shallow } from 'enzyme';
import { Text, View, Button } from 'react-native';

import App from '../App';

describe('App', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View));
  });

  describe('within View', () => {
    it('renders Text with text "Aucun article"', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Text).props().children).toEqual('Aucun article');
    });
    it('renders Button with title "Ajouter un article"', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Button));
    });
  });
});
