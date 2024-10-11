import { useState } from 'react';
import styled from 'styled-components';

import menuMobileOpen from 'assets/icons/menuMobileOpen.svg';
import menuMobileClose from 'assets/icons/menuMobileClose.svg';

import { FoundersHeaderMenuMobile } from './FoundersHeaderMenuMobile';

interface Props {
  handleOpenLearnMoreModal: () => void;
}

export const MobileHeaderFounders = ({ handleOpenLearnMoreModal }: Props) => {
  const [modalToggle, setModalToggle] = useState(false);

  return (
    <>
      <MobileMenuButton
        src={modalToggle ? menuMobileClose : menuMobileOpen}
        onClick={() => setModalToggle(prevState => !prevState)}
        alt="open menu"
      />
      <FoundersHeaderMenuMobile modalToggle={modalToggle} setModalToggle={setModalToggle} handleOpenLearnMoreModal={handleOpenLearnMoreModal} />
    </>
  );
};

const MobileMenuButton = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
