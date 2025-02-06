import React from "react";
import Tedx2 from "./Tedx2"; 

const FeatureGrid = () => {
  return (

    
    <div className="w-full py-12 bg-black flex items-center justify-center p-10">
      {/* Grid container for 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-12 ">
        <Tedx2 />
        <Tedx2 />
        <Tedx2 />
      </div>
    </div>
  );
};

export default FeatureGrid;
  