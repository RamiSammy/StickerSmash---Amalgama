import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import EmojiList from '../components/EmojiList';
import emoji1 from '../../assets/images/emoji1.png';

test('renders correctly', () => {
    const { getAllByTestId } = render(<EmojiList onSelect={() => {}} onCloseModal={() => {}} />);
    const images = getAllByTestId('emoji-image');
    expect(images.length).toBe(6);

});


test('calls onSelect and onCloseModal when emoji is pressed', () => {
    const mockOnSelect = jest.fn();
    const mockOnCloseModal = jest.fn();
    
    const utils = render(
      <EmojiList onSelect={mockOnSelect} onCloseModal={mockOnCloseModal} />
    );

    const firstEmoji = utils.getAllByTestId('emoji-image')[0];
  
    fireEvent.press(firstEmoji);
  
    expect(mockOnSelect).toHaveBeenCalledWith(emoji1);
    expect(mockOnCloseModal).toHaveBeenCalledTimes(1);
  });
