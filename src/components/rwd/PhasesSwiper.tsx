import { Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

import phase1 from 'assets/images/phases/phase1.svg';
import phase2 from 'assets/images/phases/phase2.svg';
import phase3 from 'assets/images/phases/phase3.svg';
import phase4 from 'assets/images/phases/phase4.svg';
import phase5 from 'assets/images/phases/phase5.svg';
import phase6 from 'assets/images/phases/phase6.svg';
import { minWidth640 } from './detectMobile';

const phasesImages = [phase1, phase2, phase3, phase4, phase5, phase6];

interface PhasesSwiperProps {
  height: number
}

export const PhasesSwiper = ({ height }: PhasesSwiperProps) => {
  const isTablet = useMediaQuery({
    query: minWidth640,
  });

  return (
    <Swiper
      direction="horizontal"
      slidesPerView={1}
      spaceBetween={30}
      mousewheel={{
        releaseOnEdges: true,
        thresholdTime: 500
      }}
      modules={[Mousewheel]}
      style={{
        display: 'flex',
        marginTop: `-${height * 0.9}px`,
        width: '100%'
      }}
    >
      {phasesImages?.map((phase) => (
        <SwiperSlide style={{ alignSelf: 'end', justifyContent: 'center', display: 'flex' }}>
          <img src={phase} alt="phase" style={{ width: isTablet ? '50%' : '100%', height: '100%' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
