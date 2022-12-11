import {colors, dictionary} from '@/constants';
import {GlobalStateType} from '@/store';
import {changeFilterState} from '@/store/mainFilter/actionCreators';
import {
  ListOfStringsWithVisibleFlag,
  mainFilterActionTypeConstants,
  MainFilterStateType,
} from '@/store/mainFilter/types';
import React, {useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';
import {HorizontalLine} from '../HorizontalLine/HorizontalLine';
import {CheckableButton} from './CheckableButton';

export function MainFilter() {
  const mainFilterState = useSelector<GlobalStateType, MainFilterStateType>(globalState => globalState.mainFilter);
  const dispatch = useDispatch();

  function listOfStringsWithVisibleFlagChange(
    value: string,
    extractCallback: (state: MainFilterStateType) => ListOfStringsWithVisibleFlag,
    fieldName: 'typeOfRealEstateSpace' | 'typeOfBuildings' | 'realEstateState',
  ) {
    if (!extractCallback(mainFilterState).isVisible) {
      dispatch(
        changeFilterState(prevState => ({
          ...prevState,
          [fieldName]: {
            isVisible: true,
            values: [value],
          },
        })) as any,
      );
      return;
    }

    if (extractCallback(mainFilterState).values.includes(value)) {
      const newArray = extractCallback(mainFilterState).values.filter(val => val !== value);
      if (newArray.length > 0) {
        dispatch(
          changeFilterState(prevState => ({
            ...prevState,
            [fieldName]: {
              isVisible: true,
              values: newArray,
            },
          })) as any,
        );
      }
    } else {
      dispatch(
        changeFilterState(prevState => ({
          ...prevState,
          [fieldName]: {
            isVisible: true,
            values: [...prevState[fieldName].values, value],
          },
        })) as any,
      );
    }
  }

  const listOfStringsWithVisibleFlagIsVisible = useCallback(
    (value: string, extractCallback: (state: MainFilterStateType) => ListOfStringsWithVisibleFlag) => {
      return extractCallback(mainFilterState).isVisible && extractCallback(mainFilterState).values.includes(value);
    },
    [mainFilterState],
  );

  return (
    <View>
      <View>
        <Text style={styles.categoryTitle}>{dictionary.typeOfRealEstateSpace}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5}}>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.apartments,
                  state => state.typeOfRealEstateSpace,
                  'typeOfRealEstateSpace',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(
                dictionary.apartments,
                state => state.typeOfRealEstateSpace,
              )}
              text={dictionary.apartments}
            />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.house,
                  state => state.typeOfRealEstateSpace,
                  'typeOfRealEstateSpace',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(dictionary.house, state => state.typeOfRealEstateSpace)}
              text={dictionary.houses}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 10}}>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.commercialSpaces,
                  state => state.typeOfRealEstateSpace,
                  'typeOfRealEstateSpace',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(
                dictionary.commercialSpaces,
                state => state.typeOfRealEstateSpace,
              )}
              text={dictionary.commercialSpaces}
            />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.land,
                  state => state.typeOfRealEstateSpace,
                  'typeOfRealEstateSpace',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(dictionary.land, state => state.typeOfRealEstateSpace)}
              text={dictionary.land}
            />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>{dictionary.numberOfRooms}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, justifyContent: 'flex-start'}}>
          <View style={{width: 40}}>
            <CheckableButton
              checked={
                mainFilterState.countOfRooms.isVisible &&
                mainFilterState.countOfRooms.min === 1 &&
                mainFilterState.countOfRooms.max === 1
              }
              onPress={() => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    countOfRooms: {
                      isVisible: true,
                      min: 1,
                      max: 1,
                    },
                  })) as any,
                );
              }}
              text={'1'}
            />
          </View>
          <View style={{width: 40}}>
            <CheckableButton
              text={'2'}
              checked={
                mainFilterState.countOfRooms.isVisible &&
                mainFilterState.countOfRooms.min === 2 &&
                mainFilterState.countOfRooms.max === 2
              }
              onPress={() => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    countOfRooms: {
                      isVisible: true,
                      min: 2,
                      max: 2,
                    },
                  })) as any,
                );
              }}
            />
          </View>
          <View style={{width: 40}}>
            <CheckableButton
              checked={
                mainFilterState.countOfRooms.isVisible &&
                mainFilterState.countOfRooms.min === 3 &&
                mainFilterState.countOfRooms.max === 3
              }
              onPress={() => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    countOfRooms: {
                      isVisible: true,
                      min: 3,
                      max: 3,
                    },
                  })) as any,
                );
              }}
              text={'3'}
            />
          </View>
          <View style={{width: 40}}>
            <CheckableButton
              checked={
                mainFilterState.countOfRooms.isVisible &&
                mainFilterState.countOfRooms.min === 4 &&
                mainFilterState.countOfRooms.max === 4
              }
              onPress={() => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    countOfRooms: {
                      isVisible: true,
                      min: 4,
                      max: 4,
                    },
                  })) as any,
                );
              }}
              text={'4'}
            />
          </View>
          <View style={{width: 40}}>
            <CheckableButton
              checked={
                mainFilterState.countOfRooms.isVisible &&
                mainFilterState.countOfRooms.min === 5 &&
                mainFilterState.countOfRooms.max === Number.MAX_SAFE_INTEGER
              }
              onPress={() => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    countOfRooms: {
                      isVisible: true,
                      min: 5,
                      max: Number.MAX_SAFE_INTEGER,
                    },
                  })) as any,
                );
              }}
              text={'5+'}
            />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>{dictionary.typeOfBuilding}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, justifyContent: 'flex-start'}}>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.newKindOfBuilding,
                  state => state.typeOfBuildings,
                  'typeOfBuildings',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(
                dictionary.newKindOfBuilding,
                state => state.typeOfBuildings,
              )}
              text={dictionary.newKindOfBuilding}
            />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.oldKindOfBuilding,
                  state => state.typeOfBuildings,
                  'typeOfBuildings',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(
                dictionary.oldKindOfBuilding,
                state => state.typeOfBuildings,
              )}
              text={dictionary.oldKindOfBuilding}
            />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>{dictionary.realEstateState}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5}}>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.euroRepair,
                  state => state.realEstateState,
                  'realEstateState',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(dictionary.euroRepair, state => state.realEstateState)}
              text={dictionary.euroRepair}
            />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(dictionary.medium, state => state.realEstateState, 'realEstateState')
              }
              checked={listOfStringsWithVisibleFlagIsVisible(dictionary.medium, state => state.realEstateState)}
              text={dictionary.medium}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 10}}>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.noRepair,
                  state => state.realEstateState,
                  'realEstateState',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(dictionary.noRepair, state => state.realEstateState)}
              text={dictionary.noRepair}
            />
          </View>
          <View style={{flex: 0.5}}>
            <CheckableButton
              onPress={() =>
                listOfStringsWithVisibleFlagChange(
                  dictionary.underConstruction,
                  state => state.realEstateState,
                  'realEstateState',
                )
              }
              checked={listOfStringsWithVisibleFlagIsVisible(
                dictionary.underConstruction,
                state => state.realEstateState,
              )}
              text={dictionary.underConstruction}
            />
          </View>
        </View>
      </View>

      <HorizontalLine styles={{borderColor: colors.primaryGrey}} />

      <View>
        <Text style={styles.categoryTitle}>{dictionary.surface}</Text>
        <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 5, justifyContent: 'flex-start'}}>
          <View style={{width: 120, height: 36}}>
            <TextInput
              placeholder="min"
              keyboardType="numeric"
              style={{borderWidth: 1, borderColor: colors.primaryGray}}
              onChangeText={text => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    surface: {
                      ...prevState.surface,
                      isVisible: true,
                      min: Number(text),
                    },
                  })) as any,
                );
              }}
              value={
                mainFilterState.surface.isVisible && mainFilterState.surface.min > 0
                  ? String(mainFilterState.surface.min)
                  : ''
              }
            />
          </View>
          <View style={{width: 120, height: 36, marginLeft: 10}}>
            <TextInput
              placeholder="max"
              keyboardType="numeric"
              style={{borderWidth: 1, borderColor: colors.primaryGray}}
              onChangeText={text => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    surface: {
                      ...prevState.surface,
                      isVisible: true,
                      max: Number(text),
                    },
                  })) as any,
                );
              }}
              value={
                mainFilterState.surface.isVisible && mainFilterState.surface.max < Number.MAX_SAFE_INTEGER
                  ? String(mainFilterState.surface.max)
                  : ''
              }
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
              onChangeText={text => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    cost: {
                      ...prevState.cost,
                      isVisible: true,
                      min: Number(text),
                    },
                  })) as any,
                );
              }}
              value={
                mainFilterState.cost.isVisible && mainFilterState.cost.min > 0 ? String(mainFilterState.cost.min) : ''
              }
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
              onChangeText={text => {
                dispatch(
                  changeFilterState(prevState => ({
                    ...prevState,
                    cost: {
                      ...prevState.cost,
                      isVisible: true,
                      max: Number(text),
                    },
                  })) as any,
                );
              }}
              value={
                mainFilterState.cost.isVisible && mainFilterState.cost.max < Number.MAX_SAFE_INTEGER
                  ? String(mainFilterState.cost.max)
                  : ''
              }
            />
          </View>
        </View>
      </View>

      <View style={{marginVertical: 20, marginHorizontal: 10, flexDirection: 'row'}}>
        <View style={{flex: 0.4}}>
          <TouchableOpacity
            onPress={() => dispatch({type: mainFilterActionTypeConstants.RESET_FILTER})}
            activeOpacity={0.7}
            style={{
              height: 42,
              borderColor: colors.primaryGreen,
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 5,
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.primaryGreen}}>{dictionary.resetFilter}</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 0.6}}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{
              height: 42,
              backgroundColor: colors.primaryGreen,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: colors.primaryLight}}>{dictionary.applyFilter}</Text>
          </TouchableOpacity>
        </View>
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
