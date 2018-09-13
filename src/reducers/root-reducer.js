import { combineReducers } from 'redux';
import { houseReducer } from './house-reducer';
import { swornReducer } from './sworn-reducer';

const rootReducer = combineReducers({
  houseData: houseReducer,
  swornMember: swornReducer
});



export default rootReducer;
