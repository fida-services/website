import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { LinkButton } from './_common/LinkButton';
import { maxWidth840 } from './rwd/detectMobile';
import { menuItems } from 'data/menuItems';
import { MobileHeader } from './rwd/MobileHeader';

import { ReactComponent as FidaLogo } from 'assets/logos/fidaLogo.svg';

export const Header = () => {
  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <StyledHeader>
      <FidaLogo />
      {isMobile ? (
        <MobileHeader />
      ) : (
        <div className="flex">
          {menuItems.iterableItems.map(({ label, link }) => (
            <LinkButton key={label} label={label} link={link} variant="transparent" />
          ))}
          <LinkButton
            label={menuItems.joinNetwork.label}
            variant="outline"
            isRouterLink
            link={menuItems.joinNetwork.link}
          />
        </div>
      )}
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  margin: 0 10px;
  justify-content: space-between;
  padding: 20px 0;
`;
