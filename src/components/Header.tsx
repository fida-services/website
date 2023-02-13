import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logos/fida.png';

import { menuItems } from 'data/menuItems';

import { MenuButton } from './MenuButton';
import { MobileHeader } from './rwd/MobileHeader';
import { isMobile } from './rwd/detectMobile';

export const Header = () => (
  <StyledHeader>
    <img src={logo} alt="fida logo" />
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

const StyledHeader = styled.header`
    display: flex;
    margin: 0 10px;
    justify-content: space-between;
    padding: 20px 0;
`;
