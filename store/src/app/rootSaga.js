import _ from 'lodash';
import { all, fork } from 'redux-saga/effects';

import * as navModules from "../modules/nav";

const sagas = [];

_.values({ ...navModules }).forEach((subModule) => {
    if (_.has(subModule, 'STATE_REDUCER_KEY') && _.has(subModule, 'saga')) {
      sagas.push(fork(subModule.saga));
    }
  });

export default function* rootSaga() {
  yield all([...sagas]);
}
