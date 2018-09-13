import { combineReducers } from 'redux';
import { houseReducer } from './house-reducer';

const rootReducer = combineReducers({
  houseData: houseReducer
});


export default rootReducer;
