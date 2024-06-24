import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { menuItems } from 'data/menuItems';
import { ReactComponent as FidaLogo } from 'assets/logos/fidaLogo.svg';
import { colors } from 'theme';
import { maxWidth840 } from './rwd/detectMobile';
import { MenuButton } from './MenuButton';
import { MobileHeader } from './rwd/MobileHeader';

export const Header = () => {
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <StyledHeader>
      <FidaLogo />
      {isTablet ? (
        <MobileHeader />
      ) : (
        <div className="flex">
          {menuItems.iterableItems.map(({ label, link }) => (
            <MenuButton key={label} label={label} link={link} />
          ))}
          <MenuButton
            label={menuItems.learnAbout.label}
            link={menuItems.learnAbout.link}
            border
          />
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  padding: 16px;
  background-color: ${colors.mainBlack};

  @media (min-width: 768px) {
    margin-bottom: 48px;
    padding: 16px 48px;
  }

  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`;
