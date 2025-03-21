import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import EmojiSticker from '../components/EmojiSticker';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import emoji1 from '../../assets/images/emoji1.png';

describe('<EmojiSticker />', () => {
    const initialSize = 40;

  test('renders image with correct initial size', () => {
    const { getByTestId } = render(
        <EmojiSticker imageSize={initialSize} stickerSource={emoji1} />
    );

    const stickerImage = getByTestId('sticker-image');
    
    expect(stickerImage).toBeTruthy();
    expect(stickerImage.props.style[0].width).toBe(initialSize);
    expect(stickerImage.props.style[0].height).toBe(initialSize);
  });


//   test('double tap triggers the correct console log', () => {
//     const { getByTestId } = render(
      
//         <EmojiSticker imageSize={initialSize} stickerSource={emoji1} />
      
//     );

//     const stickerImage = getByTestId('sticker-image');

//     fireEvent(stickerImage, 'press');
//     fireEvent(stickerImage, 'press');

//     // Simula el gesto de doble toque (double tap)
//     fireEvent(stickerImage, 'onStartShouldSetResponder');  // Primer toque
//     fireEvent(stickerImage, 'onStartShouldSetResponder');  // Segundo toque

 

//     // Verificamos que el tamaño de la imagen haya cambiado
//     const image = stickerImage.props.style;
//     expect(image[0].width).toBe(initialSize * 2); // El tamaño se debe duplicar
//     expect(image[0].height).toBe(initialSize * 2);
//   });

  

//   test('drag gesture moves the sticker', () => {
//     const { getByTestId } = render(
//       <GestureHandlerRootView>
//         <EmojiSticker imageSize={initialSize} stickerSource={emoji1} />
//       </GestureHandlerRootView>
//     );

//     const stickerContainer = getByTestId('sticker-container');
 
//     // Simula un gesto de arrastre (drag)
//     fireEvent(stickerContainer, 'onGestureEvent', { changeX: 50, changeY: 50 });


//     expect(stickerContainer.props.style[0].transform).toEqual([
//       { translateX: 50 },
//       { translateY: 50 },
//     ]);
//   });


});
