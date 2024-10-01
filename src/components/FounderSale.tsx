import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import 'swiper/css';

import { Header } from './Header';
import { Welcome } from './sections/Welcome';
import { maxWidth640 } from './rwd/detectMobile';
import { OurMission } from './sections/OurMission';
import { ConquerRisk } from './sections/ConquerRisk';
import { FidaMarketplace } from './sections/FidaMarketplace';
import { SeamlessAI } from './sections/SeamlessAI';
import { RoadMap } from './sections/RoadMap';
import { JoinNetwork } from './sections/JoinNetwork';
import { Footer } from './sections/Footer';

const FounderSale = () => {
  const isTablet = useMediaQuery({
    query: maxWidth640,
  });

  return (
    <div>
<img src="https://studio.nmkr.io/images/buttons/paybutton_1_2.svg" onclick="javascript:openPaymentWindow()">

<script type="text/javascript">
            function openPaymentWindow() {
                const paymentUrl = "https://pay.nmkr.io/?p=1fe458e78a46451fb812b36ab3fa6f82&c=1";

                // Specify the popup width and height
                const popupWidth = 500;
                const popupHeight = 700;

                // Calculate the center of the screen
                const left = window.top.outerWidth / 2 + window.top.screenX - ( popupWidth / 2);
                const top = window.top.outerHeight / 2 + window.top.screenY - ( popupHeight / 2);

                const popup =  window.open(paymentUrl, "NFT-MAKER PRO Payment Gateway",  `popup=1, location=1, width=${popupWidth}, height=${popupHeight}, left=${left}, top=${top}`);

                // Show dim background
                document.body.style = "background: rgba(0, 0, 0, 0.5)";

                // Continuously check whether the popup has been closed
                const backgroundCheck = setInterval(function () {
                    if(popup.closed) {
                        clearInterval(backgroundCheck);

                        console.log("Popup closed");

                        // Remove dim background
                        document.body.style = "";
                    }
                }, 1000);
            }
        </script>


    </div>
  );
};

export default FounderSale;
