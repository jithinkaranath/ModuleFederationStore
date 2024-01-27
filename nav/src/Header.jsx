import React from "react";

import { useStore } from "store/store";

 const Header= (props) => {
  const{ dummyData}=props
  console.log("dummyData===",dummyData)
  const { count, clear } = useStore();
  return (
    <>
 
    <header className="bg-blue-700 text-white font-bold text-3xl p-5 flex">
      <div className="flex-grow"> Nav Header</div>
      <div>
        {count}

        <button
          onClick={clear}
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