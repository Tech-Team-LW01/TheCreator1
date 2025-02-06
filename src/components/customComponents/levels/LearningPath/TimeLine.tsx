// // Timeline.tsx
// 'use client';

// import React from 'react';
// import TimelineCard from './TimeLineCard';
// import StraightLine from './StraightLine';
// import { timelineData } from './TimeLineData';

// const Timeline = () => {
//   return (
//     <section className="bg-black py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="bg-[#111111] rounded-2xl shadow-2xl p-8">
//           {/* Header */}
//           <div className="text-center mb-16">
//             <h1 className="text-4xl font-bold text-white mb-4">
//               Journey of a Summer Intern 2025
//             </h1>
//             <p className="text-gray-400 text-lg">
//               LEARN, INTEGRATE, IMPLEMENT & DEVELOP A LIVE SUMMER PROJECT
//             </p>
//           </div>

//           {/* Timeline Container */}
//           <div className="relative">
//             {/* Center Line */}
//             <StraightLine />

//             {/* Cards Container */}
//             <div className="relative z-10">
//               {timelineData.map((item, index) => (
//                 <div 
//                   key={item.id} 
//                   className="mb-24 last:mb-0"
//                   style={{ marginTop: index === 0 ? '40px' : '0' }}
//                 >
//                   <TimelineCard
//                     data={item}
//                     isFirst={index === 0}
//                     isLast={index === timelineData.length - 1}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;




// Timeline.tsx
'use client';

import React from 'react';
import TimelineCard from './TimeLineCard';
import StraightLine from './StraightLine';
import { timelineData } from './timeLineData';

const Timeline = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-[#111111] rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-white mb-4">
              Journey of a Summer Intern 2025
            </h1>
            <p className="text-gray-400 text-lg">
              LEARN, INTEGRATE, IMPLEMENT & DEVELOP A LIVE SUMMER PROJECT
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative h-[800px]"> {/* Fixed height container */}
            {/* Center Line */}
            <StraightLine />

            {/* Cards */}
            <div className="relative space-y-20 z-10 h-full">
              {timelineData.map((item, index) => (
                <TimelineCard
                  key={item.id}
                  data={item}
                  isFirst={index === 0}
                  isLast={index === timelineData.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;