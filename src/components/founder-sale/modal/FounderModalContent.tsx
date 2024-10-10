import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

import { Pagination, Navigation } from 'swiper/modules';
import styled from 'styled-components';
import { Swiper as SwiperCore } from 'swiper/types';

interface Steps {
  title: string;
  description: string;
  src: string;
}

const steps: Steps[] = [
  {
    title: 'Benefits of the Fida Founders NFT Collection',
    description: 'The Fida Founders NFT Collection offers a range of exclusive benefits that set it apart from other NFT collections. This collection is not just about digital art, or the historic introduction of global decentralized insurance, but a utility token within the Fida ecosystem. Here are the benefits we\'re currently planning for the token',
    src: ''
  },
  {
    title: 'Early Access to the Fida System',
    description: 'As a holder of the Fida Founders NFT, you will be invited to the private testnet. This early access allows you to familiarize yourself with the platform, navigate its features, and most importantly influence its development through feature requests and user experience suggestions.',
    src: ''
  },
  {
    title: 'First Choice of Policies',
    description: 'As an investor possessing a Fida Founders NFT will grant you access to an initial early commitment round to each policy brought onboard. This priority access means you can optimize your portfolio, with the risk profile and diversification that best suits your investment strategy. Early selection can be crucial in ensuring your proportion of the most desirable policies, especially those that might be limited in availability or have particularly favorable conditions.',
    src: ''
  },
  {
    title: 'Priority Listings',
    description: 'As an insurer or broker holding a Fida Founders NFT your policies will be highlighted as founder\'s policy. In a competitive environment where other brokers are competing for investment a founding member\'s tag can significantly impact outcomes, raising the odds of getting your policy filled and offering a substantial edge.',
    src: ''
  },
  {
    title: 'Fee Discounts',
    description: 'One of the certain advantages of the Fida Founders NFT is the entitlement to fee discounts. Listing fees, trading fees, and other charges within the Fida ecosystem will be discounted to holders of the Fida Founders Collection. As an NFT holder, you benefit from reduced fees, allowing you to trade effectively,  and potentially increase your net gains. This financial incentive is designed to reward early supporters and encourage continued engagement with the platform.',
    src: ''
  },
];

export const FounderModalContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const bullets = document.querySelectorAll('.swiper-pagination-bullet');
    bullets.forEach((bullet, index) => {
      if (index < activeIndex) {
        bullet.classList.add('swiper-pagination-bullet-past');
      } else {
        bullet.classList.remove('swiper-pagination-bullet-past');
      }
    });
  }, [activeIndex]);

  const pagination = {
    clickable: true,
    renderBullet(index: number, className: string) {
      const bulletClass = index < activeIndex ? 'swiper-pagination-bullet-past' : '';
      return `<span class="${className} ${bulletClass}">${index + 1}</span>`;
    },
  };

  return (
    <Swiper
      pagination={pagination}
      navigation
      modules={[Pagination, Navigation]}
      className="modal-swiper"
      watchSlidesProgress
      onSlideChange={(swiper: SwiperCore) => setActiveIndex(swiper.activeIndex)}
    >
      {steps.map(step => (
        <SwiperSlide key={step.title}>
          <SliderContainer>
            <img src={step.src} alt={step.title} />
            <TextContainer>
              <SliderTitle>{step.title}</SliderTitle>
              <SliderDescription>{step.description}</SliderDescription>
            </TextContainer>
          </SliderContainer>
        </SwiperSlide>

      ))}
    </Swiper>
  );
};

const SliderContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

const SliderTitle = styled.p`
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    color: black;
`;

const SliderDescription = styled.p`
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: black;
    text-align: center;
    padding: 0 26px;
`;
