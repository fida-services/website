import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { menuItems } from 'data/menuItems';
import { ReactComponent as FidaLogo } from 'assets/logos/fidaLogo.svg';
import { maxWidth840 } from './rwd/detectMobile';
import { MenuButton } from './MenuButton';
import { MobileHeader } from './rwd/MobileHeader';

export const Header = () => {
  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <StyledHeader>
      <FidaLogo />
      { isMobile
        ? (<MobileHeader />
        )
        : (
          <div className="flex">
            {menuItems.iterableItems.map(({ label, link }) => <MenuButton key={label} label={label} link={link} />)}
            <MenuButton label={menuItems.joinNetwork.label} link={menuItems.joinNetwork.link} border />
          </div>
        )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
    display: flex;
    margin: 0 10px;
    justify-content: space-between;
    padding: 20px 0;
`;
