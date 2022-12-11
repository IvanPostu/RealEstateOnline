import {Action} from 'redux';

export enum mainFilterActionTypeConstants {
  CHANGE_FILTER_FIELD = '@mainFilter/CHANGE_FILTER_FIELD',
  RESET_FILTER = '@mainFilter/RESET_FILTER',
}

type TypeWithVisibilityFlag = {
  isVisible: boolean;
};

type MinMaxValueWithVisibleFlag = {
  min: number;
  max: number;
} & TypeWithVisibilityFlag;

export type ListOfStringsWithVisibleFlag = {
  values: Array<string>;
} & TypeWithVisibilityFlag;

export type MainFilterStateType = {
  sortByOptions: Array<string>;
  sortBy: string;
  typeOfRealEstateSpace: ListOfStringsWithVisibleFlag;
  countOfRooms: MinMaxValueWithVisibleFlag;
  typeOfBuildings: ListOfStringsWithVisibleFlag;
  realEstateState: ListOfStringsWithVisibleFlag;
  surface: MinMaxValueWithVisibleFlag;
  cost: MinMaxValueWithVisibleFlag;
};

export type ChangeFilterType = {
  sortBy: string;
  typeOfRealEstateSpace: ListOfStringsWithVisibleFlag;
  countOfRooms: MinMaxValueWithVisibleFlag;
  typeOfBuildings: ListOfStringsWithVisibleFlag;
  realEstateState: ListOfStringsWithVisibleFlag;
  surface: MinMaxValueWithVisibleFlag;
  cost: MinMaxValueWithVisibleFlag;
};

export interface ChangeFilterStateAction extends Action {
  type: typeof mainFilterActionTypeConstants.CHANGE_FILTER_FIELD;
  payload: ChangeFilterType;
}

export interface ResetFilterStateAction extends Action {
  type: typeof mainFilterActionTypeConstants.RESET_FILTER;
}

export type MainFilterRootActionType = ChangeFilterStateAction | ResetFilterStateAction;
