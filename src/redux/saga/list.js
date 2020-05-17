import { select, put, call, delay } from 'redux-saga/effects';
import { updateFailureHomeist, updateHomeList } from '../action/list';
import { fetchHomeList } from './api';

export function* getHomeList() {
  const json = yield call(fetchHomeList);
  if (json.status === 200) {
    yield put(updateHomeList(json.data));
  } else {
    console.log('createEntryAsync', json.error);
    yield put(updateFailureHomeist('更新首页数据失败'));
  }
}
