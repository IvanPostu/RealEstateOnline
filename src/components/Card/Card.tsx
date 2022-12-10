import React from 'react';
import {Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';

export function Card() {
  const navigation = {
    navigate: console.log,
  };

  return (
    <ImageBackground style={{width: '100%', height: '100%'}}>
      <ScrollView>
        <TouchableOpacity style={style.container}>
          <Text style={style.cardText}>Chicken</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.container}>
          <Text style={style.cardText}>Pizza</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.container}>
          <Text style={style.cardText}>Thai</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    marginLeft: 10,
    borderRadius: 5,
  },
  cardImage: {
    width: '95%',
    height: 190,
    margin: 8,
    borderRadius: 5,
  },
  cardText: {
    color: 'red',
    marginTop: 5,
    marginLeft: 20,
    fontSize: 23,
    fontWeight: 'bold',
  },
});

export default Card;
