import {colors, dictionary} from '@/constants';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {HorizontalLine} from '../HorizontalLine/HorizontalLine';
import {CheckableButton} from './CheckableButton';

export function MainFilter() {
  return (
    <View>
      <View>
        <Text style={styles.categoryTitle}>Tip imobil</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5}}>
          <View style={{flex: 0.5}}>
            <CheckableButton checked text={dictionary.apartments} />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton text={dictionary.houses} />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 10}}>
          <View style={{flex: 0.5}}>
            <CheckableButton text={dictionary.commercialSpaces} />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton text={dictionary.land} />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>{dictionary.numberOfRooms}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, justifyContent: 'flex-start'}}>
          <View style={{width: 40}}>
            <CheckableButton checked text={'1'} />
          </View>
          <View style={{width: 40}}>
            <CheckableButton text={'2'} />
          </View>
          <View style={{width: 40}}>
            <CheckableButton text={'3'} />
          </View>
          <View style={{width: 40}}>
            <CheckableButton text={'4'} />
          </View>
          <View style={{width: 40}}>
            <CheckableButton text={'5+'} />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>{dictionary.typeOfBuilding}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, justifyContent: 'flex-start'}}>
          <View style={{flex: 0.5}}>
            <CheckableButton text={dictionary.newKindOfBuilding} />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton text={dictionary.oldKindOfBuilding} />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>Tip imobil</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5}}>
          <View style={{flex: 0.5}}>
            <CheckableButton checked text={dictionary.euroRepair} />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton text={dictionary.medium} />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 10}}>
          <View style={{flex: 0.5}}>
            <CheckableButton text={dictionary.noRepair} />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton text={dictionary.underConstruction} />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>Suprafata, m²</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, justifyContent: 'flex-start'}}>
          <View style={{width: 120, height: 36}}>
            <TextInput
              placeholder="min"
              keyboardType="numeric"
              style={{borderWidth: 1, borderColor: colors.primaryGray}}
            />
          </View>
          <View style={{width: 120, height: 36, marginLeft: 10}}>
            <TextInput
              placeholder="max"
              keyboardType="numeric"
              style={{borderWidth: 1, borderColor: colors.primaryGray}}
            />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>Preț</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, justifyContent: 'flex-start'}}>
          <View style={{width: 120, height: 36}}>
            <TextInput
              placeholder="min"
              keyboardType="numeric"
              style={{borderWidth: 1, borderColor: colors.primaryGray}}
            />
          </View>
          <View style={{width: 120, height: 36, marginLeft: 10}}>
            <TextInput
              placeholder="max"
              keyboardType="numeric"
              style={{borderWidth: 1, borderColor: colors.primaryGray}}
            />
          </View>
        </View>
      </View>

      <View style={{marginVertical: 20, marginHorizontal: 10}}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={{
            height: 42,
            backgroundColor: colors.primaryGreen,
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: 5,
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.primaryLight}}>{dictionary.applyFilter}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  categoryTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.primaryDark,
    padding: 10,
  },
});
