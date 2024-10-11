import styled from 'styled-components';
import Modal from '@mui/material/Modal';

import { ReactComponent as FidaLogo } from 'assets/logos/fidaLogo.svg';
import menuMobileOpen from 'assets/icons/menuMobileOpen.svg';
import menuMobileClose from 'assets/icons/menuMobileClose.svg';
import { colors } from 'theme';
import { Text } from 'components/_common/Text';
import { StyledMenuMainButton } from 'components/StyledFoundersNavButtons';

interface Props {
  modalToggle: boolean;
  setModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenLearnMoreModal: () => void
}

export const FoundersHeaderMenuMobile = (props: Props) => {
  const { modalToggle, setModalToggle, handleOpenLearnMoreModal } = props;

  return (
    <Modal hideBackdrop open={modalToggle}>
      <>
        <TopWrapper>
          <FidaLogo />
          <MobileMenuButton
            src={modalToggle ? menuMobileClose : menuMobileOpen}
            onClick={() => setModalToggle((prevState: boolean) => !prevState)}
            alt="open menu"
          />
        </TopWrapper>
        <MenuWrapper className="gap-4">
          <Text
            size={0.875}
            label="Learn more about Fida NFT Collection"
            toUpperCase
            textPlacing="center"
            color={colors.buttonTertiaryColorFg}
            onClick={handleOpenLearnMoreModal}
          />
          <StyledMenuMainButton>
            Discover FIDA
          </StyledMenuMainButton>
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
