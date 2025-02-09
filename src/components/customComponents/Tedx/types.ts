// types.ts
export interface SpeakerProps {
    imageUrl: string;
  
    badge: string;
    firstName: string;
    lastName: string;
    link: string;
    
    onClick?: () => void;
}