import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface EventCard {
  title: string;
  location: string;
  image: string;
  videoUrl: string;
  isYoutube?: boolean;
}

export default function RecapPreviousYear() {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  const [mainVideo, setMainVideo] = useState({
    title: "2024 RECAP VIDEO",
    location: "Main Event",
    image: "/placeholder.svg",
    videoUrl: "https://res.cloudinary.com/dmbxrhtoj/video/upload/v1732112346/Square_Root_Of_PI_π_2022_-_Knowledge_Oneness_rlx7zq.mp4",
    isYoutube: false
  });

  const [isPlaying, setIsPlaying] = useState(true);
  
  const [events, setEvents] = useState<EventCard[]>([
    {
      title: "Summer 2023",
      location: "Jaipur",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
      videoUrl: "https://www.youtube.com/embed/GCX02RwZ5dk?si=SVL-08eoPyxMhBko&autoplay=1",
      isYoutube: true
    },
    {
      title: "Summer 2023",
      location: "Jaipur",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
      videoUrl: "https://res.cloudinary.com/dmbxrhtoj/video/upload/v1732112346/Square_Root_Of_PI_π_2022_-_Knowledge_Oneness_rlx7zq.mp4",
      isYoutube: false
    },
    {
      title: "Summer 2023",
      location: "Jaipur",
      image: "https://media.licdn.com/dms/image/v2/D5622AQFEp74BR-lxYg/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1727851357915?e=1737590400&v=beta&t=sY2seTzW_33CizutwJNUqaYcg9eQOa7ZbzgPWODxsqw",
      videoUrl: "https://res.cloudinary.com/dmbxrhtoj/video/upload/v1732112346/Square_Root_Of_PI_π_2022_-_Knowledge_Oneness_rlx7zq.mp4",
      isYoutube: false
    },
  ]);

  useEffect(() => {
    if (!mainVideo.isYoutube && videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }
  }, [mainVideo]);

  const handleVideoSwap = (event: EventCard) => {
    const currentMain = mainVideo;
    setMainVideo(event);
    setIsPlaying(true);
    
    if (!event.isYoutube && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(error => {
        console.log("Video play failed:", error);
      });
    }

    const updatedEvents = events.map(e => 
      e.title === event.title ? currentMain : e
    );
    setEvents(updatedEvents);
  };

  return (
    <div className="bg-gradient-to-b from-red-50 via-gray-50 to-red-50 py-4 sm:py-8">
      <div className="container mx-auto max-w-6xl px-2 sm:px-4 py-6 sm:py-12 space-y-4 sm:space-y-8">
        {/* Main Video Section */}
        <div className="relative overflow-hidden">
          {mainVideo.isYoutube ? (
            <div className="relative w-full aspect-[16/8]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={mainVideo.videoUrl}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <video 
              ref={videoRef}
              className="w-full aspect-[16/8] object-cover h-[200px] sm:h-auto"
              poster={mainVideo.image}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={mainVideo.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent p-4 sm:p-8 flex flex-col justify-between">
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-2xl sm:text-6xl font-bold text-white">
                {mainVideo.title}
              </h1>
            </div>
            <p className="text-xs sm:text-xl text-white">{mainVideo.location}</p>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 mx-auto">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden rounded-none cursor-pointer"
              onClick={() => handleVideoSwap(event)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square h-[100px] sm:h-auto">
                  <img
                    src={event.image}
                    alt={`${event.title} ${event.location}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-2 sm:p-6">
                    <h3 className="text-sm sm:text-2xl font-bold text-white">{event.title}</h3>
                    <p className="text-xs sm:text-xl font-semibold text-red-400">{event.location}</p>
                  </div>
                  {/* Play Button */}
                  <Button 
                    size="icon" 
                    className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-6 h-6 sm:w-12 sm:h-12 rounded-full bg-red-500 hover:bg-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoSwap(event);
                    }}
                  >
                    <Play className="h-3 w-3 sm:h-6 sm:w-6 text-white" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}