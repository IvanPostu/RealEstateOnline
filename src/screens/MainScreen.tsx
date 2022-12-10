import {Container} from '@/components/Container/Container';
import {PrimaryLayout} from '@/components/PrimaryLayout/PrimaryLayout';
import {colors, dictionary} from '@/constants';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {SvgXml} from 'react-native-svg';

const sortByOptions = [dictionary.newestByDate, dictionary.moreExpensive, dictionary.lessExpensive];

function Arrow() {
  return (
    <View>
      <SvgXml
        width={28}
        height={28}
        xml={`<svg  class="ionicon" viewBox="0 0 512 512"><title>Chevron Down</title><path fill="${colors.primaryDark}" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>`}
      />
    </View>
  );
}

export const MainScreen = () => {
  return (
    <PrimaryLayout>
      <Container style={styles.container}>
        <Text style={styles.mainTitle}>{dictionary.mainTitle}</Text>
        <Text style={styles.mainTextCountOfPublications}>1922 oferte</Text>
        <Text style={styles.mainText}>{dictionary.mainText}</Text>

        <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 20}}>
          <View style={{flexGrow: 2, justifyContent: 'center'}}>
            <Text style={styles.sortByText}>{dictionary.sortBy}</Text>
          </View>
          <View style={{flexGrow: 6}}>
            <SelectDropdown
              defaultValue={sortByOptions[0]}
              buttonStyle={{borderWidth: 1}}
              renderDropdownIcon={Arrow}
              data={sortByOptions}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
            />
          </View>
          <View />
        </View>
      </Container>
    </PrimaryLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(244, 244, 244, 0.955)',
    borderRadius: 20,
    marginTop: Dimensions.get('screen').width * 0.03,
    width: Dimensions.get('screen').width * 0.97,
  },
  mainTitle: {
    textTransform: 'uppercase',
    fontSize: 21,
    fontWeight: '400',
    color: colors.primaryDark,
    padding: 10,
  },
  mainTextCountOfPublications: {
    fontSize: 13,
    fontWeight: '400',
    color: colors.primaryDark,
    paddingHorizontal: 10,
  },
  mainText: {
    fontSize: 19,
    fontWeight: '300',
    color: colors.primaryDark,
    padding: 10,
  },
  sortByText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.primaryDark,
    padding: 10,
  },
});
