import { motion } from 'framer-motion';
import styled from 'styled-components';

import { colors } from 'theme';
import { transition, transformVariant } from 'constants/motionConfig';

interface Props {
  value: number;
}

export const NFTButton = ({ value }: Props) => (
  <GradientButton
    initial="hidden"
    transition={transition}
    variants={transformVariant}
    whileInView="visible"
    onClick={() => openPaymentWindow(value)}
  >
    {`Mint ${value} Fida Founder’s NFT${plural(value)} (${countAda(value)} ADA)`}
  </GradientButton>
);

const GradientButton = styled(motion.button)`
  margin-bottom: 40px;
  border: 1px solid ${colors.blue};
  background: ${colors.backgroundGradient};
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 24px;
  outline: none;
  height: 60px;
  width: 365px;
  transition: 0.5s;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }

  &:active {
    opacity: 0.8;
  }

   @media (max-width: 840px) {
    width: 90%;
    font-size: 16px;
  }
`;

const plural = (count: number) => ((1*count) === 1 ? '' : 's');

const countAda = (count: number) => (count * 500) - ((count - 1) * 50);

const openPaymentWindow = (value: number) => {
  const paymentUrl = `https://pay.nmkr.io/?p=1fe458e78a46451fb812b36ab3fa6f82&c=${value}`;

  const popupWidth = 500;
  const popupHeight = 700;

  const wtop = window.top ?? { outerWidth: 400, outerHeight: 400, screenX: 800, screenY: 800 };
  const left = wtop.outerWidth / 2 + wtop.screenX - (popupWidth / 2);
  const top = wtop.outerHeight / 2 + wtop.screenY - (popupHeight / 2);

  const popup = window.open(paymentUrl, 'NFT-MAKER PRO Payment Gateway', `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);

  document.body.style.cssText = 'background: rgba(0, 0, 0, 0.5)';

  const backgroundCheck = setInterval(() => {
    if (popup?.closed) {
      clearInterval(backgroundCheck);
      // eslint-disable-next-line no-console
      console.log('Popup closed');

      document.body.style.cssText = '';
    }
  }, 1000);
};
