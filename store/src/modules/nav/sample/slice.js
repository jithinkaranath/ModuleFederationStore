import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { STATE_REDUCER_KEY } from './constants';
import { ACTION_TYPES } from './actions';

const initialState = {
  count: 0,
  sampleDetails: {
    count: 0
  },
  remarkDetails: ''
};

const slice = createSlice({
  initialState,
  name: STATE_REDUCER_KEY,
  reducers: {
    clearAll: () => initialState,
    setSampleCount: (state, { payload }) => {
      _.set(state, 'sampleDetails.count', payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ACTION_TYPES.FETCH_SAMPLE_DETAILS, (state, { payload }) => {
      _.set(state, 'remarkDetails', payload);
    }).addCase(ACTION_TYPES.SET_COUNT, (state, { payload }) => {
      _.set(state, 'sampleDetails.count', payload);
    })
  }
});

export const { actions, reducer } = slice;
