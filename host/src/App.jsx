import React, { lazy } from "react";
import ReactDOM from 'react-dom/client';
import { useStore,StoreProvider } from "store/store";
import "./index.scss";
import { dummyData } from "./constants";
import { useDispatch ,useSelector} from 'react-redux';

const Header = lazy(() => import('nav/Header'));
import { MODULE } from "./common/constant";
const { actions, selectors={} } = useStore();
const { getSampleDetailsCount } = selectors[`${MODULE.NAV}/sample`];
const { actions: { incrementCount, fetchSampleDetails }={} } = actions[`${MODULE.NAV}/sample`];
const App = () => {
  const count = useSelector(getSampleDetailsCount); 
  const dispatch = useDispatch();
  
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header myprop={"newprop"} dummyData={dummyData}/>
      <p style={{fontSize:"25px"}}>Name: host App</p>
      <p style={{fontSize:"30px"}}>Count: {count}</p>
      <div>
        <button
          onClick={()=>dispatch(incrementCount())}
          className="bg-indigo-800 text-white py-2 px-4 rounded"
        >
         Add Count
        </button>&nbsp;&nbsp;
        <button
          onClick={()=>dispatch(fetchSampleDetails({count, name:"JITHIN"}))}
          className="bg-indigo-800 text-white  py-2 px-4 rounded"
        >
         Reduce Count
         
        </button>&nbsp;&nbsp;
        <button
          className="bg-indigo-800 text-white py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('host'));
root.render(
  <React.StrictMode>
    <StoreProvider>
    <App />
    </StoreProvider>
  </React.StrictMode>
);