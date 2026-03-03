import { useState } from 'react';
import styled from 'styled-components';

import menuMobileOpen from 'assets/icons/menuMobileOpen.svg';
import menuMobileClose from 'assets/icons/menuMobileClose.svg';

import { FoundersHeaderMenuMobile } from './FoundersHeaderMenuMobile';

interface Props {
  handleLearnMore: () => void;
}

export const MobileHeaderFounders = ({ handleLearnMore }: Props) => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      <MobileMenuButton
        src={modalToggle ? menuMobileClose : menuMobileOpen}
        onClick={() => setModalToggle(prevState => !prevState)}
        alt="open menu"
        loading="lazy"
      />
      <FoundersHeaderMenuMobile modalToggle={modalToggle} setModalToggle={setModalToggle} handleLearnMore={handleLearnMore} />
    </>
  );
};

const MobileMenuButton = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
