import {colors} from '@/constants';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

type CheckableButtonPropsType = {
  text: string;
  onPress?: () => void;
  checked?: boolean;
};

export function CheckableButton(props: CheckableButtonPropsType) {
  const backgroundColor = props.checked ? colors.primaryGray : colors.primaryGrey;

  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={0.7}
      style={{
        height: 36,
        borderColor: props.checked ? colors.primaryGreen : 'transparent',
        backgroundColor: backgroundColor,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
      }}>
      <Text style={{fontSize: 13, fontWeight: 'bold', color: colors.primaryDark}}>{props.text}</Text>
    </TouchableOpacity>
  );
}
