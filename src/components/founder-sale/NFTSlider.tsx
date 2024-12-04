import { Swiper, SwiperSlide } from 'swiper/react';
import { useMediaQuery } from 'react-responsive';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './styles.css';

import { EffectCoverflow, Navigation } from 'swiper/modules';
import styled from 'styled-components';

import nft1 from 'assets/images/nft-cards/nft-1.svg';
import nft2 from 'assets/images/nft-cards/nft-2.svg';
import nft3 from 'assets/images/nft-cards/nft-3.svg';
import nft4 from 'assets/images/nft-cards/nft-4.svg';
import nft5 from 'assets/images/nft-cards/nft-5.svg';
import nft6 from 'assets/images/nft-cards/nft-6.svg';
import nft7 from 'assets/images/nft-cards/nft-7.svg';

import { maxWidth640 } from 'components/rwd/detectMobile';

export const NFTSlider = () => {
  const isMobile = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <NFTSliderContainer>
      <Swiper
        effect="coverflow"
        grabCursor
        initialSlide={1}
        centeredSlides
        slidesPerView={isMobile ? 2 : 5}
        coverflowEffect={{
          rotate: 20,
          stretch: 20,
          modifier: 1,
          slideShadows: true,
        }}
        loop
        pagination={false}
        navigation
        modules={[Navigation, EffectCoverflow]}
        className="nft-slider"
      >
        {nfts.map((nft, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={`nft-${index}`}>
            <img src={nft} alt="nft" loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </NFTSliderContainer>
  );
};

const NFTSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;

    @media (max-width: 840px) {
    padding: 0;
  }
`;

const nfts = [nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft1, nft2, nft3, nft4, nft5, nft6, nft7];
