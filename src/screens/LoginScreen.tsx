import {PrimaryLayout} from '@/components/PrimaryLayout/PrimaryLayout';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export const LoginScreen = () => {
  return (
    <PrimaryLayout>
      <View style={styles.container}>
        <Text style={{color: 'white'}}>Hello world</Text>
      </View>
    </PrimaryLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width * 0.85,
    height: Dimensions.get('screen').height * 0.55,
    alignItems: 'center',
    backgroundColor: 'rgba(45, 52, 54, 0.855)',
    borderRadius: 10,
  },
});
