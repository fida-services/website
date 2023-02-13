import React from 'react';
import styled from 'styled-components';

import fida from 'assets/logos/fida.png';
import linkedin from 'assets/icons/socials/linkedin.png';
import telegram from 'assets/icons/socials/telegram.png';
import twitter from 'assets/icons/socials/twitter.png';
import whatsApp from 'assets/icons/socials/whatsApp.png';
import { menuItems } from 'data/menuItems';

import { colors } from 'theme';

import { MenuButton } from './MenuButton';
import { Text } from './_common/Text';
import { isMobile } from './rwd/detectMobile';

const socials = [{
  src: twitter,
  name: 'twitter',
  link: 'https://twitter.com/fida_finance'
}, {
  src: telegram,
  name: 'telegram',
  link: 'https://t.me/+ZQqwyHJDSUJiYTdh'
}, {
  src: linkedin,
  name: 'linkedin',
  link: 'https://www.linkedin.com/company/fida-finance/'
},
// {
//   src: whatsApp,
//   name: 'whatsApp',
//   link: '#'
// }
];

const text = {
  copyright: '©Fida 2023'
};

export const Footer = () => {
  const { iterableItems, joinNetwork } = menuItems;

  return (
    <FooterWrapper>
      <LogoWrapper>
        <img src={fida} alt="fida logo" />
      </LogoWrapper>
      <MenuButtonsWrapper>
        <IterableButtonsWrapper>
          {iterableItems.map(({ label, link }) => (
            <div key={label} className="mr-5 flex align-items-center">
              <StyledLink className="text-center" href={link}>
                <Text size={1} label={label} fontWeight={700} toUpperCase />
              </StyledLink>
            </div>
          ))}
        </IterableButtonsWrapper>
        <div className={`flex justify-content-center ${isMobile ? 'mt-5 mb-5' : ''}`}>

          <MenuButton label={joinNetwork.label} link={joinNetwork.link} backgroundColor={colors.textGradient} />
        </div>
      </MenuButtonsWrapper>
      <SocialsWrapper>
        {socials.map(({ name, link, src }) => (
          <div key={name} className="mr-5">
            <a href={link}>
              <img src={src} alt={name} />
            </a>
          </div>
        ))}
      </SocialsWrapper>
      <RadiantBar />
      <div className="pb-5">
        <Text size={1} label={text.copyright} fontWeight={400} />
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.div`
    display: flex;
    padding: 0 30px;
    flex-direction: column;
    max-width: 80%;
    margin: 0 auto;
    @media (max-width: 840px) {
      max-width: 95%;
      padding: 0 15px;
    }
`;
const LogoWrapper = styled.div`
    margin-bottom: 24px;
`;
const MenuButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 34px;
    @media (max-width: 840px) {
      flex-direction: column;
    }
`;
const IterableButtonsWrapper = styled.div`
    display: flex;
    
`;
const StyledLink = styled.a`
    text-decoration: none;
`;
const SocialsWrapper = styled.div`
    display: flex;
    margin-bottom: 18px;
`;
const RadiantBar = styled.div`
    width: 100%;
    margin: 0 auto 24px 0;
    height: 2px;
    background: ${colors.textGradient};
`;
