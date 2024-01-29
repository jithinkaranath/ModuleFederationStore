import _ from 'lodash';
import * as navModules from "../modules/nav";

const commonActions = {};

_.values({ ...navModules }).forEach((submodule) => {
    if (_.has(submodule, 'STATE_REDUCER_KEY')) {
        let { ACTION_TYPES = {}, STATE_REDUCER_KEY ='STATE_REDUCER_KEY',
            sliceActions={}, actions={} } = submodule;
        _.set(commonActions, `${STATE_REDUCER_KEY}`, {STATE_REDUCER_KEY,ACTION_TYPES,sliceActions,actions});
    }
});

export default commonActions;
