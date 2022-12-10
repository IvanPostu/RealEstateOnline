import {Container} from '@/components/Container/Container';
import {PrimaryLayout} from '@/components/PrimaryLayout/PrimaryLayout';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

export const MainScreen = () => {
  const navigation = useNavigation();
  return (
    <PrimaryLayout>
      <Container style={styles.container}>
        <Text style={{color: 'white'}}>Hello world</Text>
      </Container>
    </PrimaryLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(244, 244, 244, 0.855)',
    borderRadius: 10,
  },
});
