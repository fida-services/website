import styled from 'styled-components';
import Modal from '@mui/material/Modal';

import { ReactComponent as FidaLogo } from 'assets/logos/fidaLogo.svg';
import menuMobileOpen from 'assets/icons/menuMobileOpen.svg';
import menuMobileClose from 'assets/icons/menuMobileClose.svg';
import { menuItems } from 'data/menuItems';
import { colors } from 'theme';
import { Text } from 'components/_common/Text';
import { MenuButton } from 'components/MenuButton';

interface Props {
  modalToggle: boolean;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>
}

export const HeaderMenuMobile = (props: Props) => {
  const { modalToggle, setModalToggle } = props;
  const {
    learnAbout: { label, link },
  } = menuItems;
  return (
    <Modal hideBackdrop open={modalToggle}>
      <>
        <TopWrapper>
          <FidaLogo />
          <MobileMenuButton
            src={modalToggle ? menuMobileClose : menuMobileOpen}
            onClick={() => setModalToggle((prevState: boolean) => !prevState)}
            alt="open menu"
            loading="lazy"
          />
        </TopWrapper>
        <MenuWrapper className="gap-4">
          {menuItems.iterableItems.map(({ label, link }) => (
            <a key={label} href={link} className="no-underline">
              <Text
                key={label}
                size={0.875}
                label={label}
                toUpperCase
                textPlacing="center"
                color={colors.buttonTertiaryColorFg}
              />
            </a>
          ))}
          <MenuButton label={label} link={link} border onClickLink={() => setModalToggle(false)} />
        </MenuWrapper>
      </>
    </Modal>
  );
};

const TopWrapper = styled.div`
  align-items: center;
  background-color: ${colors.mainBlack};
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.mainBlack};
  height: 100%;
  padding: 10px 10px 0;
  text-align: center;
  align-items: center;
  padding-top: 80px;

  :focus-visible {
    outline: none;
  }
`;

const MobileMenuButton = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;
