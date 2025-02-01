import React, { useEffect, useState } from 'react';

const Community = () => {
  const [position, setPosition] = useState(0);
  
  const logos = [
    { 
       
      id: 'mu-rajasthan',
      imageUrl: '/assets/collogelogo/AIETM.jaipur.jpeg' // Placeholder for demonstration
    },
    { 
      
      id: 'mu-jaipur',
      imageUrl: '/assets/collogelogo/AU,jaipur.jpeg'
    },
    { 
      
      id: 'rgcrt-ap',
      imageUrl: '/assets/collogelogo/CU,Punjab.jpeg'
    },
    { 
      
      id: 'au-jaipur',
      imageUrl: '/assets/collogelogo/DEI,Agra.jpeg'
    },
    { 
     
      id: 'aietm-jaipur',
      imageUrl: '/assets/collogelogo/IGEC.MP.jpeg'
    },
    { 
       
      id: 'uiet-rohtak',
      imageUrl: '/assets/collogelogo/iiit,nagpur.jpeg'
    },
    { 
   
      id: 'dei-agra',
      imageUrl: '/assets/collogelogo/MCE,Bihar.jpeg'
    },
    { 
    
      id: 'pvc-mumbai',
      imageUrl: '/assets/collogelogo/MU,jaipur.jpeg'
    },
    { 
     
      id: 'igec-mp',
      imageUrl: '/assets/collogelogo/MU,Rajsthan.jpeg'
    },
    { 
      
      id: 'mle-bihar',
      imageUrl: '/assets/collogelogo/NIT,Goa.jpeg'
    },
    { 
      
        id: 'mle-kurukshetra',
        imageUrl: '/assets/collogelogo/NIT,kurukshetra.jpeg'
    },
    { 
      
        id: 'mle-mumbai',
        imageUrl: '/assets/collogelogo/PVC,mumbai.jpeg'
    },
    { 
      
        id: 'mle-Agra',
        imageUrl: '/assets/collogelogo/RBS,Agra.jpeg'
    },
    { 
      
        id: 'mle-Rohathak',
        imageUrl: '/assets/collogelogo/UIET.MOU.Rohthak.jpeg'
    },
    { 
      
        id: 'mle-deharadun',
        imageUrl: '/assets/collogelogo/UPES,dehradun.jpeg'
    },
    { 
      
        id: 'mle-Pune',
        imageUrl: '/assets/collogelogo/VIT,Pune.jpeg'
    },
   
  ];

  useEffect(() => {
    const animate = () => {
      setPosition((prevPosition) => {
        if (prevPosition <= -100 * (logos.length - 5)) {
          return 0;
        }
        return prevPosition - 0.9;
      });
    };

    const animationFrame = setInterval(animate, 50);
    return () => clearInterval(animationFrame);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden bg-white p-8">
      <h1 className="text-4xl font-bold text-black text-center mb-8">
        Our College Community
      </h1>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex gap-8 transition-transform duration-300"
          style={{ transform: `translateX(${position}px)` }}
        >
          {logos.map((logo) => (
            <div
              key={logo.id}
              className="flex flex-col items-center justify-center min-w-[100px] p-4 rounded-lg  bg-white hover:shadow-lg transition-shadow"
            >
              <div className="w-full h-full pb-0 overflow-hidden rounded-lg">
                <img
                  src={logo.imageUrl}
                  alt={`logo`}
                  className="w-[200px] h-[200px] object-contain"
                />
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;