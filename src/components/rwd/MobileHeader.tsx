import React, { useState } from 'react';
import styled from 'styled-components';

import menuMobileOpen from 'assets/icons/menuMobileOpen.png';
import menuMobileClose from 'assets/icons/menuMobileClose.png';

import { HeaderMenuMobile } from './HeaderMenuMobile';

export const MobileHeader = () => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <div>
      <MobileMenuButton src={modalToggle ? menuMobileClose : menuMobileOpen} onClick={() => setModalToggle(prevState => !prevState)} alt="open menu" />
      <HeaderMenuMobile modalToggle={modalToggle} />
    </div>
  );
};

const MobileMenuButton = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;
