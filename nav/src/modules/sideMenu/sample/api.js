import { REQUEST_METHOD } from '../../../common/constant';
import { ACTION_TYPES } from './actions';

export const fetchSampleDetailsApi = ({ url = '' }) => {
  return {
    url,
    method: REQUEST_METHOD.GET,
    payload: {
      types: [
        ACTION_TYPES.FETCH_SAMPLE_DETAILS_REQUEST,
        ACTION_TYPES.FETCH_SAMPLE_DETAILS_SUCCESS,
        ACTION_TYPES.FETCH_SAMPLE_DETAILS_FAILURE
      ]
    }
  };
};