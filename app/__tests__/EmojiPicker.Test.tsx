import React from 'react';
import { render } from '@testing-library/react-native';
import EmojiPicker from '../components/EmojiPicker'; 
import { Text } from 'react-native'; 

describe('<EmojiPicker />', () => {

test('renders modal when isVisible is true', () => {
  const { getByText } = render(
    <EmojiPicker isVisible={true} onClose={() => {}}>
      <Text>Some content</Text>
    </EmojiPicker>
  );


  expect(getByText('Some content')).toBeTruthy();
});


test('does not render modal when isVisible is false', () => {
    const { queryByText } = render(
      <EmojiPicker isVisible={false} onClose={() => {}}>
        <Text>Some content</Text>
      </EmojiPicker>
    );
  

    expect(queryByText('Some content')).toBeNull();
  });

});