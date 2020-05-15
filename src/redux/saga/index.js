import {take, takeEvery, takeLatest} from 'redux-saga/effects';
import {WEATHER_DATA} from '../action/weather';
import {getWeather} from './weather';

export default function* rootSaga() {
    yield [
        takeEvery(WEATHER_DATA, getWeather)
    ]
}
