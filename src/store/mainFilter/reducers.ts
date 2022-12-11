import {dictionary} from '@/constants';
import {Reducer} from 'redux';
import {mainFilterActionTypeConstants, MainFilterRootActionType, MainFilterStateType} from './types';

const sortByOptions = [dictionary.newestByDate, dictionary.moreExpensive, dictionary.lessExpensive];

const initialState: MainFilterStateType = {
  sortByOptions,
  sortBy: sortByOptions[0],
  typeOfRealEstateSpace: {
    isVisible: false,
    values: [dictionary.apartments, dictionary.houses, dictionary.commercialSpaces, dictionary.land],
  },
  countOfRooms: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    isVisible: false,
  },
  typeOfBuildings: {
    isVisible: false,
    values: [dictionary.newKindOfBuilding, dictionary.oldKindOfBuilding],
  },
  realEstateState: {
    isVisible: false,
    values: [dictionary.euroRepair, dictionary.medium, dictionary.noRepair, dictionary.underConstruction],
  },
  cost: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    isVisible: false,
  },
  surface: {
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    isVisible: false,
  },
};

export const mainFilterReducer: Reducer<MainFilterStateType, MainFilterRootActionType> = (
  state: MainFilterStateType = initialState,
  action: MainFilterRootActionType,
) => {
  switch (action.type) {
    case mainFilterActionTypeConstants.CHANGE_FILTER_FIELD:
      return {
        ...state,
        ...action.payload,
      };
    case mainFilterActionTypeConstants.RESET_FILTER:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
