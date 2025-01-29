import React from "react";
import Tedx2 from "./Tedx2"; // Assuming Tedx2 is in the same folder

const FeatureGrid = () => {
  return (
    <div className="w-full min-h-screen bg-gray-900 flex items-center justify-center p-10">
      {/* Grid container for 3 columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Tedx2 />
        <Tedx2 />
        <Tedx2 />
      </div>
    </div>
  );
};

export default FeatureGrid;
