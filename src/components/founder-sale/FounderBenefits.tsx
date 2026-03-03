import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { colors } from 'theme';
import { transition, transformVariant } from 'constants/motionConfig';
import { maxWidth640 } from 'components/rwd/detectMobile';

import cover1 from '../../assets/images/nft-modal/cover-1.png';
import cover1mobile from '../../assets/images/nft-modal/cover-1-mobile.png';
import cover2 from '../../assets/images/nft-modal/cover-2.png';
import cover2mobile from '../../assets/images/nft-modal/cover-2-mobile.png';
import cover3 from '../../assets/images/nft-modal/cover-3.png';
import cover3mobile from '../../assets/images/nft-modal/cover-3-mobile.png';
import cover4 from '../../assets/images/nft-modal/cover-4.png';
import cover4mobile from '../../assets/images/nft-modal/cover-4-mobile.png';
import cover5 from '../../assets/images/nft-modal/cover-5.png';
import cover5mobile from '../../assets/images/nft-modal/cover-5-mobile.png';

interface BenefitStep {
  title: string;
  description: string;
  src: string;
}

const steps = (isMobile: boolean): BenefitStep[] => ([
  {
    title: 'Benefits of the Fida Founders NFT Collection',
    description: 'The Fida Founders NFT Collection offers a range of exclusive benefits that set it apart from other NFT collections. This collection is not just about digital art, or the historic introduction of global decentralized insurance, but a utility token within the Fida ecosystem. Here are the benefits we\'re currently planning for the token',
    src: isMobile ? cover1mobile : cover1
  },
  {
    title: 'Early Access to the Fida System',
    description: 'As a holder of the Fida Founders NFT, you will be invited to the private testnet. This early access allows you to familiarize yourself with the platform, navigate its features, and most importantly influence its development through feature requests and user experience suggestions.',
    src: isMobile ? cover2mobile : cover2
  },
  {
    title: 'First Choice of Policies',
    description: 'As an investor possessing a Fida Founders NFT will grant you access to an initial early commitment round to each policy brought onboard. This priority access means you can optimize your portfolio, with the risk profile and diversification that best suits your investment strategy. Early selection can be crucial in ensuring your proportion of the most desirable policies, especially those that might be limited in availability or have particularly favorable conditions.',
    src: isMobile ? cover3mobile : cover3
  },
  {
    title: 'Priority Listings',
    description: 'As an insurer or broker holding a Fida Founders NFT your policies will be highlighted as founder\'s policy. In a competitive environment where other brokers are competing for investment a founding member\'s tag can significantly impact outcomes, raising the odds of getting your policy filled and offering a substantial edge.',
    src: isMobile ? cover4mobile : cover4
  },
  {
    title: 'Fee Discounts',
    description: 'One of the certain advantages of the Fida Founders NFT is the entitlement to fee discounts. Listing fees, trading fees, and other charges within the Fida ecosystem will be discounted to holders of the Fida Founders Collection. As an NFT holder, you benefit from reduced fees, allowing you to trade effectively,  and potentially increase your net gains. This financial incentive is designed to reward early supporters and encourage continued engagement with the platform.',
    src: isMobile ? cover5mobile : cover5
  },
]);

export const FounderBenefits = () => {
  const isMobile = useMediaQuery({ query: maxWidth640 });

  return (
    <BenefitsSection id="benefits">
      {steps(isMobile).map((step, index) => (
        <BenefitCard
          key={step.title}
          initial="hidden"
          transition={transition}
          variants={transformVariant}
          whileInView="visible"
          $reversed={index % 2 !== 0}
        >
          <BenefitImage src={step.src} alt={step.title} loading="lazy" />
          <BenefitContent>
            <BenefitTitle>{step.title}</BenefitTitle>
            <BenefitDescription>{step.description}</BenefitDescription>
          </BenefitContent>
        </BenefitCard>
      ))}
    </BenefitsSection>
  );
};

const BenefitsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
  width: 100%;
  padding: 48px 0;

  @media (max-width: 840px) {
    gap: 40px;
    padding: 24px 16px;
  }
`;

const BenefitCard = styled(motion.div)<{ $reversed: boolean }>`
  display: flex;
  flex-direction: ${({ $reversed }) => ($reversed ? 'row-reverse' : 'row')};
  align-items: center;
  gap: 48px;

  @media (max-width: 840px) {
    flex-direction: column;
    gap: 24px;
  }
`;

const BenefitImage = styled.img`
  width: 50%;
  max-width: 400px;
  border-radius: 24px;
  object-fit: cover;

  @media (max-width: 840px) {
    width: 100%;
    max-width: 100%;
  }
`;

const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
`;

const BenefitTitle = styled.h3`
  font-weight: 700;
  font-size: 28px;
  line-height: 36px;
  color: ${colors.textPrimaryOnBrand};

  @media (max-width: 640px) {
    font-size: 22px;
    line-height: 28px;
  }
`;

const BenefitDescription = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: ${colors.textTertiary600};

  @media (max-width: 640px) {
    font-size: 15px;
    line-height: 24px;
  }
`;
