import {combineReducers} from 'redux';
import {mainFilterReducer} from '../mainFilter/reducers';

const rootReducer = combineReducers({
  mainFilter: mainFilterReducer,
});

export default rootReducer;
