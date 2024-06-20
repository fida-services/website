import styled from 'styled-components';

import fida from 'assets/logos/fidaLogo.svg';

import { menuItems } from 'data/menuItems';
import { socials } from 'data/socials';
import { colors } from 'theme';
import { Text } from '../_common/Text';
import { Container } from '../_common/Container';

export const Footer = () => {
  const { iterableItems } = menuItems;

  return (
    <Container style={{ marginBottom: '0px' }}>
      <FooterWrapper>
        <LogoWrapper>
          <img src={fida} alt="fida logo" />
        </LogoWrapper>
        <ContentWrapper>
          <SocialsWrapper>
            {socials.map(({ name, link, src }) => (
              <IconWrapper key={name}>
                <a href={link}>
                  <img src={src} alt={name} />
                </a>
              </IconWrapper>
            ))}
          </SocialsWrapper>
          <MenuButtonsWrapper>
            {iterableItems.map(({ label, link }) => (
              <div key={label}>
                <StyledLink href={link}>
                  <Text
                    color={colors.white}
                    fontWeight="700"
                    key={label}
                    label={label}
                    lineHeight={32}
                    size={1}
                    textPlacing="center"
                    toUpperCase
                  />
                </StyledLink>
              </div>
            ))}
          </MenuButtonsWrapper>
        </ContentWrapper>
      </FooterWrapper>
    </Container>
  );
};

const FooterWrapper = styled.div`
  align-items: center;
  display: flex;
  padding: 56px 0px;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 100px 32px;
  }
`;

const ContentWrapper = styled.div`
  padding: 0px 28px;

  @media (min-width: 1024px) {
    align-items: end;
    display: flex;
    flex-direction: column;
    padding: 0px;
  }
`;

const LogoWrapper = styled.div`
  margin-bottom: 72px;

  @media (min-width: 1024px) {
    margin-bottom: 0px;
  }
`;

const MenuButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  transition: 0.5s;

  &:hover {
    opacity: 0.6;
  }
`;

const SocialsWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 40px;

  @media (min-width: 1024px) {
    gap: 32px;
    margin-bottom: 24px;
  }
`;

const IconWrapper = styled.div`
  height: 32px;
  transition: 0.5s;
  width: 32px;

  &:hover {
    opacity: 0.6;
  }
`;
