// // TimelineCard.tsx
// import React from 'react';
// import Image from 'next/image';
// import { TimelineCardProps } from './types';

// const TimelineCard: React.FC<TimelineCardProps> = ({ data, isFirst, isLast }) => {
//   const isLeft = data.position === 'left';

//   return (
//     <div className={`
//       relative flex items-center min-h-[120px]
//       ${isLeft ? 'justify-start' : 'justify-end'}
//     `}>
//       <div className={`
//         w-[45%] relative
//         bg-white rounded-xl p-6
//         shadow-lg hover:shadow-xl
//         transform transition-all duration-300 hover:scale-105
//       `}>
//         {/* Connector Line */}
//         <div className={`
//           absolute top-1/2 -translate-y-1/2
//           ${isLeft ? 'right-[-30px]' : 'left-[-30px]'}
//           w-[30px] h-[2px] bg-red-600
//         `} />

//         {/* Card Content */}
//         <div className="flex gap-6 items-center">
//           <div className="flex-1">
//             <h3 className="text-lg font-bold text-gray-900 mb-2">
//               {data.title}
//             </h3>
//             <p className="text-sm text-gray-600">
//               {data.description}
//             </p>
//           </div>
//           <div className="w-20 h-20 flex-shrink-0">
//             <Image
//               src={data.image}
//               alt={data.title}
//               width={80}
//               height={80}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TimelineCard;






// TimelineCard.tsx
import React from 'react';
import Image from 'next/image';
import { TimelineCardProps } from './types';

const getPositionStyle = (id: number) => {
  const positions = {
    1: 'top-[0%]',
    2: 'top-[12.6%]',
    3: 'top-[27.2%]',
    4: 'top-[40.8%]',
    5: 'top-[55.4%]',
    6: 'top-[69%]',
  };
  return positions[id as keyof typeof positions];
};

const TimelineCard: React.FC<TimelineCardProps> = ({ data, isFirst, isLast }) => {
  const isLeft = data.position === 'left';

  return (
    <div
      className={`
        absolute w-full
        ${getPositionStyle(data.id)}
        transition-all duration-500 ease-in-out
      `}
    >
      <div
        className={`
          flex items-center
          ${isLeft ? 'justify-start' : 'justify-end'}
        `}
      >
        <div
          className={`
            w-[42%] relative
            ${isLeft ? 'mr-[8%]' : 'ml-[8%]'}
            bg-black rounded-xl p-6
            shadow-lg hover:shadow-xl
            transform transition-all duration-300 hover:scale-105
          `}
        >
          {/* Connector Line */}
          <div
            className={`
              absolute top-1/2 -translate-y-1/2
              ${isLeft ? 'right-[-40px]' : 'left-[-40px]'}
              w-[40px] h-[2px] bg-red-600
            `}
          />

          {/* Card Content */}
          <div className="flex gap-6 items-center">
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {data.title}
              </h3>
              <p className="text-sm text-gray-600">
                {data.description}
              </p>
            </div>
            <div className="w-20 h-20 flex-shrink-0">
              <Image
                src={data.image}
                alt={data.title}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;