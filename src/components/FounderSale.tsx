import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { maxWidth640 } from './rwd/detectMobile';

import { Header } from './Header';
import { Footer } from './sections/Footer';

export const FounderSale = () => {
  const isTablet = useMediaQuery({
    query: maxWidth640,
  });

  const openPaymentWindow = () => {
    const paymentUrl = 'https://pay.nmkr.io/?p=1fe458e78a46451fb812b36ab3fa6f82&c=2';

    // Specify the popup width and height
    const popupWidth = 500;
    const popupHeight = 700;

    // Calculate the center of the screen
    const wtop = window.top ?? { outerWidth: 400, outerHeight: 400, screenX: 800, screenY: 800 };
    const left = wtop.outerWidth / 2 + wtop.screenX - (popupWidth / 2);
    const top = wtop.outerHeight / 2 + wtop.screenY - (popupHeight / 2);

    const popup = window.open(paymentUrl, 'NFT-MAKER PRO Payment Gateway', `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);

    // Show dim background
    document.body.style.cssText = 'background: rgba(0, 0, 0, 0.5)';

    // Continuously check whether the popup has been closed
    const backgroundCheck = setInterval(() => {
      if (popup?.closed) {
        clearInterval(backgroundCheck);
        console.log('Popup closed');

        // Remove dim background
        document.body.style.cssText = '';
      }
    }, 1000);
  };

  return (
    <div>
      <Header />
      <h1>Fida Founder&apos;s NFT Collection Mint</h1>
      <p>Mint a Founder&apos;s NFT to gain early adopter&apos;s access to the decentralized insurance marketplace.</p>
      <img alt="Sample NFT" src="https://c-ipfs-gw.nmkr.io/ipfs/QmXt3NqLXs4pt9sFH35mrXrquYLSsRE8EvVKiMtF1JzzTo" width="480px" />
      <img alt="Purchase through NMKR" src="https://studio.nmkr.io/images/buttons/paybutton_1_2.svg" onClick={openPaymentWindow} />
      <Footer />
    </div>
  );
};

export default FounderSale;
