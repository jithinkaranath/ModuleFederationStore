import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import { StoreProvider ,useStore} from "store/store";

import "./index.scss";

const App = () => {
  const { count, increment } = useStore();
  // const sumData= commonUtils(1,2)
  // console.log("sumData from nav", sumData)
  return (
    <div className="text-3xl mx-auto max-w-6xl">
      <Header />
      <p style={{fontSize:"25px"}}>Name: nav App</p>
      <p style={{fontSize:"25px"}}>Count: {count}</p>
      <div>
        <button
          onClick={increment}
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
