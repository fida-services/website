import React from 'react';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';

import { menuItems } from 'data/menuItems';
import { colors } from 'theme';
import { Text } from 'components/_common/Text';
import filledSquares from 'assets/shapes/squareWithFill.png';

interface Props {
  modalToggle: boolean
}
const modalStyled = {
  top: '120px',
  height: 'calc(100% - 120px)'
};

export const HeaderMenuMobile = (props: Props) => {
  const { modalToggle } = props;
  const { joinNetwork: { label, link } } = menuItems;
  return (
    <Modal style={modalStyled} hideBackdrop open={modalToggle}>
      <MenuWrapper className="gap-4">
        {menuItems.iterableItems.map(({ label, link }) => (
          <a key={label} href={link} className="no-underline">
            <Text key={label} size={2.5} label={label} toUpperCase />
          </a>
        ))}
        <a href={link} className="no-underline">
          <Text label={label} size={2.5} color={colors.textGradient} linearGradient toUpperCase />
        </a>
      </MenuWrapper>
    </Modal>
  );
};

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.mainBlack};
  height: 100%;
  padding: 10px 10px 0;
  
  &:before {
      content: "";
      position: absolute;
      overflow: visible;
      width: 500px;
      height: 500px;
      bottom: -350px;
      left: -50px;
      background: url(${filledSquares}) 0 0 no-repeat;
      transform: rotate(60deg) scale(.8);
    }
`;
