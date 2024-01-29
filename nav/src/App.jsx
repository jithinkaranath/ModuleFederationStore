import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { useDispatch ,useSelector} from 'react-redux';
import { StoreProvider ,useStore} from "store/store";

import "./index.scss";
import { MODULE } from "./common/constant";
const { actions, selectors={} } = useStore();
const { getSampleDetailsCount } = selectors[`${MODULE.NAV}/sample`];
const { actions: { setCount }={} } = actions[`${MODULE.NAV}/sample`];

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(getSampleDetailsCount);
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <p style={{fontSize:"25px"}}>Name: nav App</p>
      <p style={{fontSize:"25px"}}>Count: {count}</p>
      <div>
        <button
          onClick={()=>dispatch(setCount())}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
ReactDOM.render( 
<StoreProvider>
  <App />
</StoreProvider>, document.getElementById("app"));
