import Immutable from 'immutable';
import { WEATHER_DATA } from '../../action/weather';

const initialState = {
  newUser: null,
};

export const weather = (state = initialState, action = {}) => {
  switch (action.type) {
    case WEATHER_DATA:
      return state;
    default:
      return state;
  }
};
