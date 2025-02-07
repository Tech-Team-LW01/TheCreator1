import React, { useEffect, useRef } from 'react';
import Card from './Card';
import { register } from 'swiper/element/bundle';


import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({
   subsets: ['latin'],
   weight: ['400']
});

import localFont from "next/font/local";
const khandFont = localFont({
    src: '../../../app/fonts/Khand-SemiBold.woff',
    weight: '100 900',
});
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': any;
      'swiper-slide': any;
    }
  }
}

register();
const VideoCarousel = () => {
    const videos = [
      {
        id: 1,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_1',
        thumbnail:"https://thecreator.one/wp-content/uploads/2024/01/nayan-bheda-scaled.jpg",
      },
      {
        id: 2,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
        thumbnail:"https://thecreator.one/wp-content/uploads/2024/01/vimal-daga-scaled.jpg",
      },
      {
        id: 3,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
        thumbnail:"https://thecreator.one/wp-content/uploads/2024/01/pramod-scaled.jpg",
      },
      {
        id: 4,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4',
        thumbnail:"https://thecreator.one/wp-content/uploads/2024/01/pramod-scaled.jpg",
      },
      {
        id: 5,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5',
        thumbnail:"/assets/media/5.jpg",
      },
      {
        id: 6,
        videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_6',
        thumbnail:"/assets/media/6.jpeg",
      },
    ];
  
    return (
      <div className="w-full max-w-6xl mx-auto p-4">

        <div className='w-full h-24 flex items-center justify-center'>
            <h1 className={`text-[#ff0000] text-4xl ${khandFont.className}`}>Hear what Investors &
            Industry Experts have to say</h1>
        </div>
        <swiper-container
          slides-per-view="4"
          space-between="24"
          loop="true"
          navigation="true"
          pagination="false"
          autoplay-delay="3000"
          autoplay-disable-on-interaction="false"
          breakpoints='{
            "320": {
              "slidesPerView": 1,
              "spaceBetween": 20
            },
            "640": {
              "slidesPerView": 2,
              "spaceBetween": 20
            },
            "768": {
              "slidesPerView": 3,
              "spaceBetween": 24
            },
            "1024": {
              "slidesPerView": 4,
              "spaceBetween": 24
            }
          }'
        >
          {videos.map((video) => (
            <swiper-slide key={video.id}>
              <Card
                thumbnail={video.thumbnail}
                videoUrl={video.videoUrl}
              />
            </swiper-slide>
          ))}
        </swiper-container>
      </div>
    );
  };
  
  export default VideoCarousel;

