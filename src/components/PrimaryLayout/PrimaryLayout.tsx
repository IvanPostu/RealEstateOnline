import React, {PropsWithChildren, ReactElement} from 'react';
import {ImageBackground, SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {StyleSheet} from 'react-native';
import {colors} from '@/constants';
import backgroundImage from '@/assets/buildings1.png';

type PrimaryLayoutPropType = PropsWithChildren<unknown>;

export const PrimaryLayout = (props: PrimaryLayoutPropType): ReactElement => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? colors.primaryDark : colors.primaryLight,
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.image}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <SafeAreaView>{props.children}</SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
});
