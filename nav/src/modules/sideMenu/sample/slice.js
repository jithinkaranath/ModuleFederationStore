import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { STATE_REDUCER_KEY } from './constants';
import { ACTION_TYPES } from './actions';

const initialState = {
  headerIncrementCount:{
    count:0
  }
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
    }).addCase(ACTION_TYPES.HEADER_INCREMENT_COUNT, (state, { payload }) => {
      _.set(state, 'headerIncrementCount.count', state.headerIncrementCount.count + 1);
    })
  }
});

export const { actions, reducer } = slice;
