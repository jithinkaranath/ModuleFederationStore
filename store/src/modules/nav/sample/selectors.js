import { flow } from 'lodash';
import { STATE_REDUCER_KEY } from './constants';

const sample = (state) => state[STATE_REDUCER_KEY];

const sampleDetailsCount = (state) => state.sampleDetails.count;
export const getSampleDetailsCount = flow(sample, sampleDetailsCount);