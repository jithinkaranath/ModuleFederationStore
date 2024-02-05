import { all, put, takeLatest } from 'redux-saga/effects';
import { ACTION_TYPES } from './actions';
// import * as api from './api';
import {actions as sliceActions} from './slice'
export function* fetchSampleDetails({ payload }) {
  console.log({ payload })
  yield put(sliceActions.setSampleCount(10));
  // yield fork(
  //   handleAPIRequest,
  //   api.deleteRemarkApi,
  //   { ...payload, id }
  // );
  // const { payload: { message = '' } = {}, type } = yield take([
  //   ACTION_TYPES.DELETE_REMARK_SUCCESS,
  //   ACTION_TYPES.DELETE_REMARK_FAILURE]);
  // if (type === ACTION_TYPES.DELETE_REMARK_SUCCESS) {
  //   yield call(successTost, { title: 'success', description: message || t('success') });
  //   yield call(fetchRemarksDetails, { payload: id });
  // }
}

export default function* sampleSaga() {
  yield all([
    takeLatest(ACTION_TYPES.FETCH_SAMPLE_DETAILS, fetchSampleDetails)
  ]);
}
