import { combineReducers } from 'redux';
import { weather } from './weather';
import { list } from './list';

// 合并reducer
const rootReducer = combineReducers({
  weather,
  list
});

export default rootReducer;
