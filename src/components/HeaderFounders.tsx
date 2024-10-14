import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';

import { ReactComponent as FidaLogo } from 'assets/logos/fidaLogo.svg';
import { colors } from 'theme';
import { maxWidth1024, maxWidth840 } from './rwd/detectMobile';
import { MobileHeaderFounders } from './rwd/MobileHeaderFounders';
import { StyledMenuMainButton, StyledMenuModalButton } from './StyledFoundersNavButtons';

interface Props {
  handleOpenModal: () => void;
}

export const HeaderFounders = ({ handleOpenModal }: Props) => {
  const navigate = useNavigate();

  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  const isSlg = useMediaQuery({
    query: maxWidth1024,
  });

  return (
    <StyledHeader>
      <FidaLogo />
      {isTablet ? (
        <MobileHeaderFounders handleOpenLearnMoreModal={handleOpenModal} />
      ) : (
        <div className="flex">
          <StyledMenuModalButton onClick={handleOpenModal}>{isSlg ? 'Learn more' : 'Learn more about Fida NFT Collection'}</StyledMenuModalButton>
          <StyledMenuMainButton onClick={() => navigate('/')}>
            Discover FIDA
          </StyledMenuMainButton>
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 80px;
  padding: 16px;
  background-color: ${colors.mainBlack};

  @media (min-width: 768px) {
    margin-bottom: 48px;
    padding: 16px 48px;
  }

  @media (min-width: 1024px) {
    margin-top: 20px;
  }
`;
