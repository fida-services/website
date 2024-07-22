import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { maxWidth640 } from 'components/rwd/detectMobile';

interface UsePhaseSizeInput {
  height: number
  phaseIndex: number
  width: number
}

export const usePhaseSizeMobile = (props: UsePhaseSizeInput) => {
  const { height, phaseIndex, width } = props;
  const [phaseHeight, setPhaseHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [phaseWidth, setPhaseWidth] = useState(0);

  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  useEffect(() => {
    const adj = (() => {
      switch (phaseIndex) {
        case 1:
          return { height: isMobile ? 0.9 : 0.8, top: isMobile ? 0.9 : 0.8, width: isMobile ? 0.5 : 0.7 };
        case 2:
          return { height: isMobile ? 0.8 : 0.7, top: isMobile ? 0.8 : 0.7, width: isMobile ? 0.4 : 0.7 };
        case 3:
          return { height: 0.6, top: 0.6, width: isMobile ? 0.3 : 0.6 };
        case 4:
          return { height: 0.5, top: 0.5, width: isMobile ? 0.3 : 0.5 };
        case 5:
          return { height: 0.3, top: 0.3, width: isMobile ? 0.6 : 0.85 };
        case 6:
          return { height: isMobile ? 0.2 : 0.15, top: isMobile ? 0.2 : 0.1, width: isMobile ? 0.5 : 0.85 };
        default:
          return { height: 0.2, top: 0.2, width: 1 };
      }
    })();
    setPhaseHeight(height * adj.height);
    setTop(height * adj.top);
    setPhaseWidth(width * adj.width);
  }, [phaseIndex, isMobile, height, width]);

  return {
    phaseHeight,
    phaseWidth,
    top
  };
};
