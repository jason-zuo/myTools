import { take, takeEvery, takeLatest } from 'redux-saga/effects';
import { WEATHER_DATA } from '../action/weather';
import { GET_HOME_LIST } from '../action/list';
import { getWeather } from './weather';
import { getHomeList } from './list';

export default function* rootSaga() {
  yield takeLatest(GET_HOME_LIST, getHomeList);
  yield takeLatest(WEATHER_DATA, getWeather);
}
