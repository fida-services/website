import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';

import { colors, radius } from 'theme';
import { transition, transformVariant } from 'constants/motionConfig';
import { maxWidth640, maxWidth840 } from 'components/rwd/detectMobile';
import { AnimatedText } from 'components/_common/AnimatedText';
import { ReadMore } from 'components/ReadMore';

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

const MAX_DESCRIPTION_LENGTH = 150;

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
  const isTablet = useMediaQuery({ query: maxWidth840 });

  return (
    <BenefitsSection id="benefits">
      {steps(isMobile).map((step, index) => {
        const isReversed = index % 2 !== 0;
        return (
          <BenefitCard key={step.title}>
            <Card isReversed={isReversed}>
              <BenefitImage
                alt={step.title}
                initial="hidden"
                isReversed={isReversed}
                src={step.src}
                variants={transformVariant}
                whileInView="visible"
                transition={transition}
              />
              <BenefitContent
                initial="hidden"
                transition={transition}
                variants={transformVariant}
                whileInView="visible"
              >
                <AnimatedText
                  color={colors.textPrimaryOnBrand}
                  fontFamily="Inter"
                  fontWeight={400}
                  label={step.title}
                  lineHeight={isTablet ? 38 : 72}
                  size={isTablet ? 1.875 : 3.75}
                />
                {step.description.length >= MAX_DESCRIPTION_LENGTH && isTablet ? (
                  <ReadMore text={step.description} limit={MAX_DESCRIPTION_LENGTH} />
                ) : (
                  <AnimatedText
                    color={colors.buttonTertiaryColorFg}
                    fontFamily="Inter"
                    fontWeight={500}
                    label={step.description}
                    lineHeight={isTablet ? 20 : 28}
                    size={isTablet ? 0.875 : 1.125}
                  />
                )}
              </BenefitContent>
            </Card>
          </BenefitCard>
        );
      })}
    </BenefitsSection>
  );
};

const BenefitsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;

  @media (min-width: 1024px) {
    gap: 0px;
  }
`;

const BenefitCard = styled.div`
  background-color: ${colors.mainBlack};
  border-radius: ${radius['4xl']};

  @media (min-width: 1024px) {
    margin: 80px 0px;
  }
`;

const Card = styled.div<{ isReversed: boolean }>`
  align-items: center;
  background: ${colors.greyBackgroundGradient};
  border-radius: ${radius['4xl']};
  display: flex;
  flex-direction: column;
  padding: 16px;
  position: relative;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: ${({ isReversed }) => (isReversed ? '60% 40%' : '40% 60%')};
    justify-content: space-between;
    padding: 0px 32px;
  }

  @media (min-width: 1440px) {
    grid-template-columns: ${({ isReversed }) => (isReversed ? '60% 30%' : '30% 60%')};
  }
`;

const BenefitImage = styled(motion.img)<{ isReversed: boolean }>`
  width: 100%;
  border-radius: ${radius['4xl']};

  @media (min-width: 1024px) {
    margin: ${({ isReversed }) => (isReversed ? '0px' : '24px 0px')};
    order: ${({ isReversed }) => (isReversed ? 1 : 0)};
  }
`;

const BenefitContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  margin-bottom: 32px;
  margin-top: 14px;

  @media (min-width: 1024px) {
    margin-left: 24px;
    gap: 40px;
    padding: 100px 0px;
  }
`;
