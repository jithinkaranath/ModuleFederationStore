import React from "react";

import { useStore } from "store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { MODULE } from "./common/constant";
const { actions, selectors={}, StoreRootReducer, sliceActions } = useStore();

console.log("sliceActions===", sliceActions)
console.log("StoreRootReducer===", StoreRootReducer)

const { getSampleDetailsCount,getIncrementCount } = selectors[`${MODULE.NAV}/sample`];
const { setInitialIncrementCount} = sliceActions[`${MODULE.NAV}/sample`];
// const { actions: { incrementCount } = {} } = actions[`${MODULE.NAV}/sample`];

 const Header= (props) => {
  const{ dummyData }=props
   const count = useSelector(getSampleDetailsCount);
   const incrementCountValue = useSelector(getIncrementCount);

  const dispatch = useDispatch();
   
  return (
    <>
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div className="flex-grow"> Nav Header</div>
      <div>
        {incrementCountValue}
        <button
          onClick={()=>dispatch(setInitialIncrementCount())}
          className="bg-indigo-800 text-white font-bold py-2 px-4 rounded"
        >
          Clear Count
        </button>
      </div>
    </header>
    <div style={{display:"flex", gap:"20px"}}>
      <p style={{fontSize:"25px"}}>props passed from host to microfrontend app: </p>
    {dummyData ? dummyData?.map((val, index)=>{
      return <div key={`index-${val.brand}`}>
       <p>{val.brand}</p>
       </div>
  }):"This is nav app"}
  </div>
    </>
  );
};

export default Header;