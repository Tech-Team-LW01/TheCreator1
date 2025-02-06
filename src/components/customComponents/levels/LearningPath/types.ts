// types.ts
export interface TimelineItem {
  id: number;
  title: string;
  description: string;
  image: string;
  position: 'left' | 'right';
}

export interface TimelineCardProps {
  data: TimelineItem;
  isFirst: boolean;
  isLast: boolean;
}