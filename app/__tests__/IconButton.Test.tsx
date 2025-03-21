import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import IconButton from '../components/IconButton'; 

//describe('renders icon and label correctly', () => {
//  const { getByText } = render(<IconButton icon="home" label="Home" onPress={() => {}} />);

//  expect(getByText('Home')).toBeTruthy();
//});




describe('IconButton Component', () => {
  test('should render icon and label correctly', () => {
    const { getByText } = render(<IconButton icon="home" label="Home" onPress={() => {}} />);
    expect(getByText('Home')).toBeTruthy();
  });

  test('calls onPress when pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <IconButton icon="home" label="Home" onPress={onPressMock} />
    );
  
    fireEvent.press(getByText('Home'));
  
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
  



});

