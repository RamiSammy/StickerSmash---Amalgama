import React from 'react';
import { render } from '@testing-library/react-native';
import index from '../(tabs)/index';

test('isModalVisible should start as false', () => {
  const { queryByText } = render(<index />);
  
  // Suponiendo que el modal contiene un texto "Choose an Emoji" o similar
  expect(queryByText('Choose an Emoji')).toBeNull();
});
