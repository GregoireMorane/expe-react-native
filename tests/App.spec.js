import React from 'react';
import { shallow } from 'enzyme';
import { Text, View, Button, Alert } from 'react-native';

import App from '../App';

describe('App', () => {
  it('renders View', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(View)).toHaveLength(1);
  });

  describe('within View', () => {
    it('renders Text with text "Aucun article"', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Text).props().children).toEqual('Aucun article');
    });
    it('renders Button with title "Ajouter un article"', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Button).props().title).toEqual('Ajouter un article');
    });
    it('simulate button press to be a Alert', () => {
      const wrapper = shallow(<App />);
      Alert.alert = jest.fn();
      wrapper.find(Button).simulate('Press');
      expect(Alert.alert).toHaveBeenCalledWith('Touché');
    });
  });
});
