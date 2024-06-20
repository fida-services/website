import { useEffect, useState } from 'react';

interface UsePhaseSizeInput {
  height: number
  phaseIndex: number
  width: number
}

export const usePhaseSize = (props: UsePhaseSizeInput) => {
  const { height, phaseIndex, width } = props;
  const [top, setTop] = useState(0);
  const [phaseWidth, setPhaseWidth] = useState(0);

  useEffect(() => {
    // Calculate new height and position based on phase index
    let newWidth = width;
    let newTop = 0;

    switch (phaseIndex) {
      case 1:
        newWidth = width / 23;
        break;
      case 2:
        newTop = height * 0.05;
        newWidth = width / 23;
        break;
      case 3:
        newWidth = width / 30;
        break;
      case 4:
        newTop = height * 0.1;
        newWidth = width / 20;
        break;
      case 5:
        newWidth = width / 23;
        break;
      case 6:
        newTop = height * 0.1;
        newWidth = width / 28;
        break;
      default:
        newTop = height * 0.2;
        break;
    }

    setTop(newTop);
    setPhaseWidth(newWidth);
  }, [phaseIndex, height, width]);

  return {
    phaseWidth,
    top
  };
};
