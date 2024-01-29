import { reducer, actions as sliceActions} from './slice';
import { STATE_REDUCER_KEY } from './constants';
import saga from './saga';
import * as commonActions from './actions';
import * as selectors from './selectors';

const {ACTION_TYPES,...actions } = commonActions;
export {
    saga, reducer, STATE_REDUCER_KEY, ACTION_TYPES,
    sliceActions, actions, selectors
};
