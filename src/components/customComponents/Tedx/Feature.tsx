// FeatureGrid.tsx
import React from "react";
import Tedx2 from "./Tedx2";
import { speakersData } from "./TedxData";



const FeatureGrid = () => {
  return (
    <div className="w-full py-12 bg-black flex items-center justify-center p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-12">
        {speakersData.map((speaker, index) => (
          <Tedx2
            key={index}
            imageUrl={speaker.imageUrl}
            description={speaker.description}
            badge={speaker.badge}
            firstName={speaker.firstName}
            lastName={speaker.lastName}
            link={speaker.link}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;