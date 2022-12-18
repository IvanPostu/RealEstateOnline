import {Container} from '@/components/Container/Container';
import {HorizontalLine} from '@/components/HorizontalLine/HorizontalLine';
import {MainFilter} from '@/components/MainFilter/MainFilter';
import {PrimaryLayout} from '@/components/PrimaryLayout/PrimaryLayout';
import {colors, dictionary} from '@/constants';
import {GlobalStateType} from '@/store';
import {changeFilterState} from '@/store/mainFilter/actionCreators';
import {MainFilterStateType} from '@/store/mainFilter/types';
import React, {Fragment, useState} from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import SelectDropdown from 'react-native-select-dropdown';
import {SvgXml} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';

function DropdownArrow() {
  return (
    <SvgXml
      width={28}
      height={28}
      xml={`<svg  viewBox="0 0 512 512"><path fill="${colors.primaryDark}" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M112 184l144 144 144-144"/></svg>`}
    />
  );
}

function NotificationIcon() {
  const svg = `<svg  viewBox="0 0 512 512"> <path d="M427.68 351.43C402 320 383.87 304 383.87 217.35 383.87 138 343.35 109.73 310 96c-4.43-1.82-8.6-6-9.95-10.55C294.2 65.54 277.8 48 256 48s-38.21 17.55-44 37.47c-1.35 4.6-5.52 8.71-9.95 10.53-33.39 13.75-73.87 41.92-73.87 121.35C128.13 304 110 320 84.32 351.43 73.68 364.45 83 384 101.61 384h308.88c18.51 0 27.77-19.61 17.19-32.57zM320 384v16a64 64 0 01-128 0v-16" fill="${colors.primaryLight}" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"/></svg>`;

  return <SvgXml width={18} height={18} xml={svg} />;
}

type MainScreenStateType = {
  filterIsVisible: boolean;
};

type ApartmentOfferPropsType = {
  imageSource?: ImageSourcePropType;
  price: string;
  surface: number;
  countOfRooms: number;
  floorNumber: string;
};

function ApartmentOffer(props: ApartmentOfferPropsType) {
  return (
    <Container
      style={{
        ...styles.container,
        padding: 8,
        marginTop: 10,
        borderWidth: 1,
        borderColor: colors.primaryGray,
        backgroundColor: 'white',
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={{flex: 0.5}}>
          <Image style={{width: '100%', height: 120}} source={props.imageSource} />
        </View>
        <View style={{flex: 0.5, justifyContent: 'flex-end'}}>
          <View style={{marginLeft: 5, flexGrow: 1}}>
            <Text style={{fontSize: 17}}>
              <Text style={{fontWeight: 'bold'}}>Preț:</Text> <Text>{props.price}</Text>
            </Text>
            <Text style={{fontSize: 15}}>
              <Text style={{fontWeight: 'bold'}}>Suprafața:</Text> <Text>{props.surface} m²</Text>
            </Text>
            <Text style={{fontSize: 15}}>
              <Text style={{fontWeight: 'bold'}}>Nr. băi:</Text> <Text>{props.countOfRooms}</Text>
            </Text>
            <Text style={{fontSize: 15}}>
              <Text style={{fontWeight: 'bold'}}>Nr. Etaj:</Text> <Text>{props.floorNumber}</Text>
            </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 36,
              backgroundColor: colors.primaryGreen,
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: 5,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fffffa'}}>{dictionary.details}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
}

export const MainScreen = () => {
  const [state, setState] = useState<MainScreenStateType>({
    filterIsVisible: false,
  });

  const mainFilterState = useSelector<GlobalStateType, MainFilterStateType>(globalState => globalState.mainFilter);
  const dispatch = useDispatch();
  return (
    <PrimaryLayout>
      <ScrollView style={styles.scrollableContainer}>
        <Container style={styles.container}>
          <Text style={styles.mainTitle}>{dictionary.mainTitle}</Text>
          <Text style={styles.mainTextCountOfPublications}>1922 oferte</Text>
          <Text style={styles.mainText}>{dictionary.mainText}</Text>

          <View style={{flexDirection: 'row', justifyContent: 'flex-start', marginVertical: 10}}>
            <View style={{flexGrow: 2, justifyContent: 'center'}}>
              <Text style={styles.sortByText}>{dictionary.sortBy}:</Text>
            </View>
            <View style={{flexGrow: 6, justifyContent: 'center'}}>
              <SelectDropdown
                defaultValue={mainFilterState.sortBy}
                buttonStyle={{borderWidth: 1, height: 38, borderColor: colors.primaryGray}}
                buttonTextStyle={{fontSize: 16}}
                rowTextStyle={{fontSize: 15}}
                renderDropdownIcon={DropdownArrow}
                data={mainFilterState.sortByOptions}
                onSelect={selectedItem => {
                  dispatch(changeFilterState(prevState => ({...prevState, sortBy: selectedItem})) as any);
                }}
                buttonTextAfterSelection={selectedItem => {
                  return selectedItem;
                }}
                rowTextForSelection={item => {
                  return item;
                }}
              />
            </View>
            <View />
          </View>

          <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

          <View style={{flexDirection: 'row', margin: 10, marginBottom: 25}}>
            <View style={{flex: 0.5}}>
              <TouchableOpacity
                onPress={() => setState(prevState => ({...state, filterIsVisible: !prevState.filterIsVisible}))}
                activeOpacity={0.7}
                style={{
                  height: 36,
                  borderColor: colors.primaryGreen,
                  borderWidth: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 5,
                }}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: colors.primaryGreen}}>{dictionary.filter}</Text>
              </TouchableOpacity>
            </View>
            <View style={{flex: 0.5}}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  height: 36,
                  backgroundColor: colors.primaryGreen,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: 5,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <NotificationIcon />
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: '#fffffa'}}>{dictionary.subscribe}</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>

          {state.filterIsVisible ? (
            <View
              style={{
                backgroundColor: 'transparent',
                borderRadius: 20,
              }}>
              <MainFilter />
            </View>
          ) : (
            <Fragment />
          )}
        </Container>

        {flatOffers.map((element, index) => (
          <ApartmentOffer {...element} key={index} />
        ))}
      </ScrollView>
    </PrimaryLayout>
  );
};

const styles = StyleSheet.create({
  scrollableContainer: {
    marginVertical: 10,
    borderRadius: 20,
  },
  container: {
    backgroundColor: 'rgba(244, 244, 244, 0.955)',
    borderRadius: 8,
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

const flatOffers: Array<ApartmentOfferPropsType> = [
  {
    countOfRooms: 2,
    floorNumber: '7/11',
    price: '30.000 $',
    surface: 34,
    imageSource: require('@/assets/flat1.png'),
  },
  {
    countOfRooms: 3,
    floorNumber: '2/13',
    price: '14.000 $',
    surface: 22,
    imageSource: require('@/assets/flat2.png'),
  },
  {
    countOfRooms: 1,
    floorNumber: '3/11',
    price: '22.000 $',
    surface: 27,
    imageSource: require('@/assets/flat3.png'),
  },
  {
    countOfRooms: 3,
    floorNumber: '3/16',
    price: '87.000 $',
    surface: 77,
    imageSource: require('@/assets/flat4.png'),
  },
  {
    countOfRooms: 1,
    floorNumber: '1/8',
    price: '22.000 $',
    surface: 22,
    imageSource: require('@/assets/flat5.png'),
  },
  {
    countOfRooms: 2,
    floorNumber: '5/11',
    price: '45.000 $',
    surface: 55,
    imageSource: require('@/assets/flat6.png'),
  },
  {
    countOfRooms: 3,
    floorNumber: '11/11',
    price: '87.000 $',
    surface: 77,
    imageSource: require('@/assets/flat7.png'),
  },
  {
    countOfRooms: 1,
    floorNumber: '1/5',
    price: '19.000 $',
    surface: 28,
    imageSource: require('@/assets/flat8.png'),
  },
  {
    countOfRooms: 3,
    floorNumber: '7/11',
    price: '55.000 $',
    surface: 55,
    imageSource: require('@/assets/flat9.png'),
  },
];
