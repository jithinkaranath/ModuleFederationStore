import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";
import { useDispatch ,useSelector} from 'react-redux';
import { StoreProvider ,useStore} from "store/store";
import { headerIncrementCount } from "./modules/sideMenu/sample/actions";
import "./index.scss";
import { MODULE } from "./common/constant";
import {CombinedStoreProvider} from "./CombinedProvider";
import { STATE_REDUCER_KEY } from "./modules/sideMenu/sample";

const { actions, selectors={} } = useStore();
const { getSampleDetailsCount,getIncrementCount } = selectors[`${MODULE.NAV}/sample`];
const { actions: {incrementCount, setCount }={} } = actions[`${MODULE.NAV}/sample`];

const App = () => {
  const dispatch = useDispatch();
  const incrementCountValue = useSelector(getIncrementCount); 

  const headerCount= useSelector(state=>state[STATE_REDUCER_KEY].headerIncrementCount.count)

  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <p style={{fontSize:"25px"}}>Name: nav App</p>
      <div>
        <button
          onClick={()=>dispatch(incrementCount())}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart
        </button><br></br><br></br>

        <button
          onClick={()=>dispatch(headerIncrementCount())}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Add To Cart from header store
        </button>
      </div>
      {incrementCountValue}
     <p>headerCount:</p> {headerCount}
    </div>
  );
};
ReactDOM.render(
  <CombinedStoreProvider>
  <App />
  </CombinedStoreProvider>
,
 document.getElementById("app"));
