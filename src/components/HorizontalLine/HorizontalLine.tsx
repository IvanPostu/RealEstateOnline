import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';

export function HorizontalLine(props: {styles?: StyleProp<ViewStyle>}) {
  const currentStyles: StyleProp<ViewStyle> = {
    ...{
      width: '90%',
      margin: 10,
      alignSelf: 'center',
      borderColor: 'rgba(45, 52, 54, 0.355)',
      borderBottomWidth: 1,
    },
    ...((props.styles as object) || {}),
  };

  return <View style={currentStyles} />;
}
