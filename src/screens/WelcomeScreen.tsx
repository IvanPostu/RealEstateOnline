import {Container} from '@/components/Container/Container';
import {PrimaryLayout} from '@/components/PrimaryLayout/PrimaryLayout';
import {colors, dictionary} from '@/constants';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <PrimaryLayout>
      <Container style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View
          style={{
            height: 300,
            borderRadius: 22,
            marginTop: -50,
            backgroundColor: '#fff',
            padding: 30,
          }}>
          <Text style={{fontSize: 30, fontWeight: 'bold', letterSpacing: 1, color: '#2e3532'}}>
            {dictionary.companyTitle}
          </Text>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{color: '#a0a9a1'}}>{dictionary.aboutUs1}</Text>
          </View>
          <View style={{flexDirection: 'column', justifyContent: 'flex-end'}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 0.5}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MainScreen' as never)}
                  activeOpacity={0.7}
                  style={{
                    height: 48,
                    borderColor: colors.primaryGreen,
                    borderWidth: 2,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 24,
                    marginRight: 5,
                  }}>
                  <Text
                    style={{textTransform: 'uppercase', fontSize: 13, fontWeight: 'bold', color: colors.primaryGreen}}>
                    {dictionary.apartment}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{flex: 0.5}}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('MainScreen' as never)}
                  activeOpacity={0.7}
                  style={{
                    height: 48,
                    backgroundColor: colors.primaryGreen,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 24,
                    marginLeft: 5,
                  }}>
                  <Text style={{textTransform: 'uppercase', fontSize: 13, fontWeight: 'bold', color: '#fffffa'}}>
                    {dictionary.house}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Container>
    </PrimaryLayout>
  );
};
