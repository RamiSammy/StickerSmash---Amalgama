import React, { useState } from 'react';
import { StyleSheet, FlatList, Platform, Pressable } from 'react-native';
import { Image, type ImageSource } from 'expo-image';


import emoji1 from '../../assets/images/emoji1.png';
import emoji2 from '../../assets/images/emoji2.png';
import emoji3 from '../../assets/images/emoji3.png';
import emoji4 from '../../assets/images/emoji4.png';
import emoji5 from '../../assets/images/emoji5.png';
import emoji6 from '../../assets/images/emoji6.png';


type Props = {
  onSelect: (item: ImageSource) => void;
  onCloseModal: () => void;
};

export default function EmojiList({ onSelect, onCloseModal }: Props) {


  const [emoji] = useState<ImageSource[]>([
    emoji1,
    emoji2,
    emoji3,
    emoji4,
    emoji5,
    emoji6,
  ]);



  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => (
        <Pressable
          onPress={() => {
            onSelect(item);
            onCloseModal();
          }}>
          {/* eslint-disable-next-line react/react-in-jsx-scope */}
          <Image source={item} key={index} style={styles.image} testID="emoji-image" />
        </Pressable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});
