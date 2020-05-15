import {select, put, call, delay} from 'redux-saga/effects';
export function* getWeather() {
    yield call(delay, 1000)
}
