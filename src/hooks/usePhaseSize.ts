import { useEffect, useState } from 'react';

interface UsePhaseSizeInput {
  phaseIndex: number
  width: number
}

export const usePhaseSize = (props: UsePhaseSizeInput) => {
  const { phaseIndex, width } = props;
  const [phaseWidth, setPhaseWidth] = useState(0);

  useEffect(() => {
    // Calculate new width based on phase index
    let newWidth = width;

    switch (phaseIndex) {
      case 1:
        newWidth = width / 23;
        break;
      case 2:
        newWidth = width / 23;
        break;
      case 3:
        newWidth = width / 30;
        break;
      case 4:
        newWidth = width / 20;
        break;
      case 5:
        newWidth = width / 23;
        break;
      case 6:
        newWidth = width / 28;
        break;
      default:
        newWidth = width / 23;
        break;
    }

    setPhaseWidth(newWidth);
  }, [phaseIndex, width]);

  return { phaseWidth };
};
