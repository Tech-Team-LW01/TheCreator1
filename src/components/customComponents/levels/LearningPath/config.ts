import { BadgeConfig, Point } from './types';

export const badgeConfigs: { [key: number]: BadgeConfig } = {
  1: {
    position: {
      right: '-168px',
      top: '20px'
    },
    size: {
      width: '36px',
      height: '36px'
    },
    style: {
      backgroundColor: '#7158e2'
    }
  },
  2: {
    position: {
      left: '-148px',
      top: '40px'
    },
    size: {
      width: '36px',
      height: '36px'
    },
    style: {
      backgroundColor: '#7158e2'
    }
  },
  3: {
    position: {
      right: '-18px',
      top: '0px'
    },
    size: {
      width: '36px',
      height: '36px'
    },
    style: {
      backgroundColor: '#7158e2'
    }
  },
  4: {
    position: {
      left: '-158px',
      top: '25px'
    },
    size: {
      width: '36px',
      height: '36px'
    },
    style: {
      backgroundColor: '#7158e2'
    }
  }
};

export const wavyLinePoints: Point[] = [
  { 
    x: -70, y: 50,
    controlPoint1: { x: -80, y: 20 },
    controlPoint2: { x: -100, y: 270 }
  },
  { 
    x: 100, y: 240,
    controlPoint1: { x: 200, y: 450 },
    controlPoint2: { x: -120, y: 300 }
  },
  { 
    x: -70, y: 500,
    controlPoint1: { x: -80, y: 600 },
    controlPoint2: { x: -100, y: 750 }
  },
  { 
    x: 100, y: 750,
    controlPoint1: { x: 200, y: 900 },
    controlPoint2: { x: -120, y: 950 }
  },
  { 
    x: -70, y: 1000,
    controlPoint1: { x: -80, y: 1100 },
    controlPoint2: { x: -100, y: 1200 }
  },
  { 
    x: 50, y: 1200 
  }
];