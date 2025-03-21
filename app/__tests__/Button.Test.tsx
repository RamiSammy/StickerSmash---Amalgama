import React from 'react';
import { render } from '@testing-library/react-native';
import Button from '../components/Button'


describe('<Button />', () => {
    describe('Rendering', () => {
        test('Show label correctly', () => {
            const { getByText } = render(<Button label="Click me" />);
            expect(getByText('Click me')).toBeTruthy();
        });
    });
});
