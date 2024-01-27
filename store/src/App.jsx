import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import {StoreProvider, useStore} from "./store";

const App = () => {
  const { count } = useStore();
  return(
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Name: store App</div>
    <div>Framework: react</div>
    <div>Language: JavaScript</div>
    <div>CSS: Tailwind</div>
    <p>count:{count}</p>

  </div>
  )
  };
ReactDOM.render(
<StoreProvider>
  <App />
  </StoreProvider>, document.getElementById("app"));
