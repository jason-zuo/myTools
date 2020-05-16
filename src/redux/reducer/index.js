import { combineReducers } from 'redux';
import { weather } from './weather';

// 合并reducer
const rootReducer = combineReducers({
  weather,
});

export default rootReducer;
