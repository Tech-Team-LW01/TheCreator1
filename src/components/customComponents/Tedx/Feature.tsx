import React from "react";
import Tedx2 from "./Tedx2"; 

const FeatureGrid = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#520000] via-[#710000] via-[#a50000] to-[#ce0000] flex items-center justify-center p-10">
      {/* Grid container for 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Tedx2 />
        <Tedx2 />
        <Tedx2 />
      </div>
    </div>
  );
};

export default FeatureGrid;
