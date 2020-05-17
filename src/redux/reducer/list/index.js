
import { UPFATE_HOME_LIST } from '../../action/list';

const initialState = {
  list: [],
};

export const list = (state = initialState, action = {}) => {
  switch (action.type) {
    case UPFATE_HOME_LIST:
      console.log(action)
      return Object.assign({}, state, {list: action.data.list});
    default:
      return state;
  }
};
