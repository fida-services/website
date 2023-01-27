import React from 'react';
import styled from 'styled-components';
import logo from 'assets/icons/fidaLogo.png';
import { MenuButton } from './MenuButton';

// interface Props {

// }

const menuItems = [
  {
    label: 'home',
    link: '#'
  },
  {
    label: 'whitepaper',
    link: '#'
  },
  {
    label: 'invest deck',
    link: '#'
  },

];

export const Header = () => (
  <StyledHeader>
    <img src={logo} alt="fida logo" />
    <div className="flex">
      {menuItems.map(({ label, link }) => <MenuButton key={label} label={label} link={link} />)}
      <MenuButton label="join our community" link="#" border />
    </div>
  </StyledHeader>
);

const StyledHeader = styled.header`
    display: flex;
    margin: 0 10px;
    justify-content: space-between;
    padding: 20px 0
`;
