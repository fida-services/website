import styled from 'styled-components';
import Modal from '@mui/material/Modal';

import { menuItems } from 'data/menuItems';
import { colors } from 'theme';
import { Text } from 'components/_common/Text';
import { MenuButton } from 'components/MenuButton';

interface Props {
  modalToggle: boolean;
}
const modalStyled = {
  top: '80px',
  height: 'calc(100% - 80px)',
};

export const HeaderMenuMobile = (props: Props) => {
  const { modalToggle } = props;
  const {
    joinNetwork: { label, link },
  } = menuItems;
  return (
    <Modal style={modalStyled} hideBackdrop open={modalToggle}>
      <MenuWrapper className="gap-4">
        {menuItems.iterableItems.map(({ label, link }) => (
          <a key={label} href={link} className="no-underline">
            <Text
              key={label}
              size={0.875}
              label={label}
              toUpperCase
              textPlacing="center"
              color={colors.button_tertiary_color_fg}
            />
          </a>
        ))}
        <MenuButton label={label} link={link} border />
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
  text-align: center;
  align-items: center;

  :focus-visible {
    outline: none;
  }
`;
