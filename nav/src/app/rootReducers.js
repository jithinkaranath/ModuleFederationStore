import _ from 'lodash';
import * as navModules from "../modules/sideMenu";

const reducers = {}, selectors = {};

  _.values({ ...navModules }).forEach((submodule) => {
    if (_.has(submodule, 'STATE_REDUCER_KEY') && _.has(submodule, 'reducer')) {
      _.set(reducers, `${submodule.STATE_REDUCER_KEY}`, submodule.reducer);
      _.set(selectors, `${submodule.STATE_REDUCER_KEY}`, submodule.selectors);
    }
  });

const rootReducer = {
  ...reducers
};

export { rootReducer, selectors };
