export interface Point {
  x: number;
  y: number;
  controlPoint1?: { x: number; y: number };
  controlPoint2?: { x: number; y: number };
}

export interface BadgePosition {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

export interface BadgeConfig {
  position: BadgePosition;
  size?: {
    width: string;
    height: string;
  };
  style?: React.CSSProperties;
}

export interface LearningPathProps {
  className?: string;
  customStyle?: React.CSSProperties;
}

export interface NumberBadgeProps {
  number: number;
  config: BadgeConfig;
  className?: string;
}

export interface LevelItem {
  number: number;
  title: string;
  items: string[];
  badgeConfig: BadgeConfig;
}