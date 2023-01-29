import React from 'react';
import styled from 'styled-components';

import logo from 'assets/logos/fida.png';
import { menuItems } from 'data/menuItems';

import { MenuButton } from './MenuButton';

export const Header = () => (
  <StyledHeader>
    <img src={logo} alt="fida logo" />
    <div className="flex">
      {menuItems.iterableItems.map(({ label, link }) => <MenuButton key={label} label={label} link={link} />)}
      <MenuButton label={menuItems.joinCommunity.label} link={menuItems.joinCommunity.link} border />
    </div>
  </StyledHeader>
);

const StyledHeader = styled.header`
    display: flex;
    margin: 0 10px;
    justify-content: space-between;
    padding: 20px 0
`;
