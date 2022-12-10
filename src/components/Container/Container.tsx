import React, {PropsWithChildren, ReactElement} from 'react';
import {Dimensions, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ContainerPropType = PropsWithChildren<unknown> & {style?: StyleProp<ViewStyle>; fullScreen?: boolean};

export const Container = (props: ContainerPropType): ReactElement => {
  let currentStyle: StyleProp<ViewStyle> = props.style || ({} as object);
  currentStyle = props.fullScreen ? {...currentStyle, ...styles.container} : {...currentStyle};

  return <SafeAreaView style={currentStyle}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: '100%',
  },
});
