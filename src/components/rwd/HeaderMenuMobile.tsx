import React from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';

import { MenuButton } from 'components/MenuButton';
import { menuItems } from 'data/menuItems';

interface Props {
  modalToggle: boolean
}
const modalStyled = {
  top: '120px',
  height: 'calc(100% - 120px)'
};

export const HeaderMenuMobile = (props: Props) => {
  const { modalToggle } = props;

  return (
    <Modal style={modalStyled} open={modalToggle}>
      <MenuWrapper>
        {menuItems.iterableItems.map(({ label, link }) => <MenuButton key={label} label={label} link={link} />)}
        <MenuButton label={menuItems.joinCommunity.label} link={menuItems.joinCommunity.link} border />
      </MenuWrapper>
    </Modal>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
