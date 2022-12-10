import React, {PropsWithChildren, ReactElement} from 'react';
import {Dimensions, StyleProp, StyleSheet, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

type ContainerPropType = PropsWithChildren<unknown> & {style?: StyleProp<ViewStyle>};

export const Container = (props: ContainerPropType): ReactElement => {
  const currentStyle: StyleProp<ViewStyle> = props.style || ({} as object);
  return <SafeAreaView style={{...styles.container, ...currentStyle}}>{props.children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width,
    height: '100%',
  },
});
