import Immutable from 'immutable';
import {WEATHER_DATA} from '../../action/weather'

const initialState = Immutable.fromJS({
    newUser: null
});

export const weather = (state = initialState, action = {}) => {
    switch (action.type) {
        case WEATHER_DATA:
            return state.merge({
                'newUser': 1222
            });
        default:
            return state
    }
};
