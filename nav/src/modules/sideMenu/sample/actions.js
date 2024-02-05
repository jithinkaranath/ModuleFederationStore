import { createAction } from '@reduxjs/toolkit';
import { STATE_REDUCER_KEY } from './constants';

export const ACTION_TYPES = {
  FETCH_SAMPLE_DETAILS: `${STATE_REDUCER_KEY}/FETCH_SAMPLE_DETAILS`,
  FETCH_SAMPLE_DETAILS_REQUEST: `${STATE_REDUCER_KEY}/FETCH_SAMPLE_DETAILS_REQUEST`,
  FETCH_SAMPLE_DETAILS_SUCCESS: `${STATE_REDUCER_KEY}/FETCH_SAMPLE_DETAILS_SUCCESS`,
  FETCH_SAMPLE_DETAILS_FAILURE: `${STATE_REDUCER_KEY}/FETCH_SAMPLE_DETAILS_FAILURE`,

  SET_COUNT: `${STATE_REDUCER_KEY}/SET_COUNT`,
  HEADER_INCREMENT_COUNT: `${STATE_REDUCER_KEY}/HEADER_INCREMENT_COUNT`

};

export const fetchSampleDetails = createAction(
  ACTION_TYPES.FETCH_SAMPLE_DETAILS
);

export const setCount = createAction(
  ACTION_TYPES.SET_COUNT
);

export const headerIncrementCount = createAction(
  ACTION_TYPES.HEADER_INCREMENT_COUNT
);