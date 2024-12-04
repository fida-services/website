import { useState } from 'react';
import styled from 'styled-components';

import menuMobileOpen from 'assets/icons/menuMobileOpen.svg';
import menuMobileClose from 'assets/icons/menuMobileClose.svg';

import { HeaderMenuMobile } from './HeaderMenuMobile';

export const MobileHeader = () => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      <MobileMenuButton
        src={modalToggle ? menuMobileClose : menuMobileOpen}
        onClick={() => setModalToggle(prevState => !prevState)}
        alt="open menu"
        loading="lazy"
      />
      <HeaderMenuMobile modalToggle={modalToggle} setModalToggle={setModalToggle} />
    </>
  );
};

const MobileMenuButton = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
