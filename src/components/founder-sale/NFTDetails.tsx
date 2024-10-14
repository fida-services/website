import styled from 'styled-components';
import { colors } from 'theme';

import star from 'assets/images/nft-infos/star.svg';
import resources from 'assets/images/nft-infos/resources.svg';
import light from 'assets/images/nft-infos/light.svg';
import { motion } from 'framer-motion';

import { transition, transformVariant } from 'constants/motionConfig';

interface InfoProps {
  title: string;
  description: string;
  src: string;
}

const Details: InfoProps[] = [
  {
    title: 'Exclusive Fida Benefits',
    description: 'The Fida Founders NFT Collection is designed to offer a suite of benefits that enhance your experience and potential returns within the Fida ecosystem.',
    src: star
  },
  {
    title: 'Tangible NFT Advantages',
    description: 'From early access and first-choice policies to fee discounts and beyond, these NFTs provide tangible advantages that can significantly impact your engagement and success.',
    src: resources
  },
  {
    title: 'Invest in Innovation',
    description: 'By investing in a Fida Founders NFT, you are not only acquiring a unique digital asset but also contributing to the growth of the most innovative platforms in decentralized insurance.',
    src: light
  },
];

export const NFTDetails = () => (
  <DetailsContainer>
    {Details.map(info => (
      <InformationBox
        key={info.title}
        initial="hidden"
        transition={transition}
        variants={transformVariant}
        whileInView="visible"
      >
        <img width={100} height={100} src={info.src} alt={info.title} />
        <InformationTitle>{info.title}</InformationTitle>
        <InformationDescription>{info.description}</InformationDescription>
      </InformationBox>
    ))}
  </DetailsContainer>
);

const DetailsContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 40px;
  gap: 0;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 48px;
  }
`;

const InformationBox = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: start;
    align-items: center
`;

const InformationTitle = styled.p`
    font-size: 24px;
    text-align: center;
    color: white;
    font-weight: 700
`;

const InformationDescription = styled.p`
    font-size: 18px;
    text-align: center;
    color: ${colors.textTertiary600};
    font-weight: 500
`;
