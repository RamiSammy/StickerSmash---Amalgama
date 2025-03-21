import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import CircleButton from '../components/CircleButton'


describe('<CiruleButton />', () => {

        test('Show button correctly', () => {
            const { getByTestId } = render(<CircleButton onPress={() => {}} />);
    
            // Verifica que el botón existe en la UI con testID
            expect(getByTestId('circle-button')).toBeTruthy();
        });

        test('calls the onPress function when the button is pressed', () => {

            const mockOnPress = jest.fn();
            const { getByTestId } = render(<CircleButton onPress={mockOnPress} />);
    
     
            const circleButton = getByTestId('circle-button')


  
            fireEvent.press(circleButton);
  
            //expect(mockOnSelect).toHaveBeenCalledWith(emoji1);
            expect(mockOnPress).toHaveBeenCalledTimes(1);


        });
});
