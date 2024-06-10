import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { menuItems } from 'data/menuItems';
import { ReactComponent as FidaLogo } from 'assets/logos/fidaLogo.svg';
import { maxWidth1024, maxWidth840 } from './rwd/detectMobile';
import { MenuButton } from './MenuButton';
import { MobileHeader } from './rwd/MobileHeader';

interface StyledProps {
  isLaptop?: boolean;
}

export const Header = () => {
  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  const isLaptop = useMediaQuery({
    query: maxWidth1024,
  });

  return (
    <StyledHeader isLaptop={isLaptop}>
      <FidaLogo />
      {isMobile ? (
        <MobileHeader />
      ) : (
        <div className="flex">
          {menuItems.iterableItems.map(({ label, link }) => (
            <MenuButton key={label} label={label} link={link} />
          ))}
          <MenuButton
            label={menuItems.joinNetwork.label}
            link={menuItems.joinNetwork.link}
            border
          />
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header<StyledProps>`
  display: flex;
  margin: ${({ isLaptop }) => (isLaptop ? '0 16px' : '0 48px')};
  justify-content: space-between;
  padding: 20px 0;
`;
