import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { maxWidth640 } from 'components/rwd/detectMobile';

interface UsePhaseSizeInput {
  height: number
  phaseIndex: number
  width: number
}

export const usePhaseSize = (props: UsePhaseSizeInput) => {
  const { height, phaseIndex, width } = props;
  const [phaseHeight, setPhaseHeight] = useState(0);
  const [top, setTop] = useState(0);
  const [phaseWidth, setPhaseWidth] = useState(0);

  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  useEffect(() => {
    // Calculate new height and position based on phase index
    let newHeight = height;
    let newWidth = width;
    let newTop = 0;

    switch (phaseIndex) {
      case 1:
        newHeight = height * 0.9;
        newTop = height * 0.9;
        newWidth = isMobile ? width * 0.5 : width * 0.6;
        break;
      case 2:
        newHeight = height * 0.8;
        newTop = height * 0.8;
        newWidth = isMobile ? width * 0.4 : width * 0.5;
        break;
      case 3:
        newHeight = isMobile ? height * 0.6 : height * 0.7;
        newTop = isMobile ? height * 0.6 : height * 0.7;
        newWidth = isMobile ? width * 0.3 : width * 0.4;
        break;
      case 4:
        newHeight = isMobile ? height * 0.5 : height * 0.6;
        newTop = isMobile ? height * 0.5 : height * 0.6;
        newWidth = width * 0.3;
        break;
      case 5:
        newHeight = isMobile ? height * 0.3 : height * 0.4;
        newTop = isMobile ? height * 0.3 : height * 0.4;
        newWidth = isMobile ? width * 0.6 : width * 0.5;
        break;
      case 6:
        newHeight = height * 0.2;
        newTop = height * 0.2;
        newWidth = isMobile ? width * 0.5 : width * 0.45;
        break;
      default:
        newHeight = height * 0.2;
        newTop = height * 0.2;
        break;
    }

    setPhaseHeight(newHeight);
    setTop(newTop);
    setPhaseWidth(newWidth);
  }, [phaseIndex, height, width]);

  return {
    phaseHeight,
    phaseWidth,
    top
  };
};
