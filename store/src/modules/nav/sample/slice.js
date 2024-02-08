import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import { STATE_REDUCER_KEY } from './constants';
import { ACTION_TYPES } from './actions';

const initialState = {
  count: 0,
  sampleDetails: {
    count: 0
  },
  remarkDetails: '',
  incrementCount:{
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
    },
    setInitialIncrementCount: (state) => {
      _.set(state, 'incrementCount.count', 0);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(ACTION_TYPES.FETCH_SAMPLE_DETAILS, (state, { payload }) => {
      _.set(state, 'remarkDetails', payload);
    }).addCase(ACTION_TYPES.INCREMENT_COUNT, (state, { payload }) => {
      _.set(state, 'incrementCount.count', state.incrementCount.count + 1);
    })
  }
});

export const { actions, reducer } = slice;
