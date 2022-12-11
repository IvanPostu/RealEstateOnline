import {Action} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import {GlobalStateType} from '..';
import {ChangeFilterStateAction, mainFilterActionTypeConstants, ChangeFilterType} from './types';

type AsyncActionCreatorType<T extends Action | Action> = (
  dispatch: ThunkDispatch<GlobalStateType, unknown, T>,
  getState: () => GlobalStateType,
) => void;

export function changeFilterState(
  callback: (prevState: ChangeFilterType) => ChangeFilterType,
): AsyncActionCreatorType<ChangeFilterStateAction> {
  return async (dispatch: ThunkDispatch<GlobalStateType, unknown, Action>, getState: () => GlobalStateType) => {
    const state = getState().mainFilter;

    const {cost, countOfRooms, realEstateState, sortBy, surface, typeOfBuildings, typeOfRealEstateSpace} = state;
    const payload = callback({
      cost,
      countOfRooms,
      realEstateState,
      sortBy,
      surface,
      typeOfBuildings,
      typeOfRealEstateSpace,
    });
    dispatch({
      type: mainFilterActionTypeConstants.CHANGE_FILTER_FIELD,
      payload,
    } as ChangeFilterStateAction);
  };
}
