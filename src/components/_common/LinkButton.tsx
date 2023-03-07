import { CSSProperties } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { colors } from 'theme';

interface Props {
  label: string;
  link: string;
  isRouterLink?: boolean;
  textTransform?: CSSProperties['textTransform'];
  variant?: 'outline' | 'white' | 'gradient' | 'transparent';
}

export const LinkButton = (props: Props) => {
  const { label, variant, link, isRouterLink } = props;
  return (
    <>
      {!isRouterLink ? (
        <StyledLink href={link} variant={variant}>
          {variant === 'white' && <ButtonWhite variant={variant}>{label}</ButtonWhite>}
          {variant === 'transparent' && (
            <ButtonTransparent variant={variant}>{label}</ButtonTransparent>
          )}
          {variant === 'outline' && <ButtonOutline variant={variant}>{label}</ButtonOutline>}
          {variant === 'gradient' && <ButtonGradient variant={variant}>{label}</ButtonGradient>}
        </StyledLink>
      ) : (
        <StyledRouterLink to={link} variant={variant}>
          {variant === 'white' && <ButtonWhite variant={variant}>{label}</ButtonWhite>}
          {variant === 'transparent' && (
            <ButtonTransparent variant={variant}>{label}</ButtonTransparent>
          )}
          {variant === 'outline' && <ButtonOutline variant={variant}>{label}</ButtonOutline>}
          {variant === 'gradient' && <ButtonGradient variant={variant}>{label}</ButtonGradient>}
        </StyledRouterLink>
      )}
    </>
  );
};

const ButtonWhite = styled.button<Pick<Props, 'variant' | 'textTransform'>>`
  text-align: center;
  background: ${colors.white};
  border: none;
  border-radius: 25px;
  padding: ${({ variant }) => (variant === 'transparent' ? '0 0' : '8px 34px')};
  color: ${colors.mainBlack};
  font-weight: 700;
  font-size: 16px;
  text-transform: ${({ textTransform }) => (textTransform ? textTransform : 'uppercase')};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;

const StyledLink = styled.a<Pick<Props, 'variant'>>`
  text-decoration: none;
  margin: ${({ variant }) => (variant === 'transparent' ? '13px 44px' : '5px 10px')};
`;

const StyledRouterLink = styled(Link)<Pick<Props, 'variant'>>`
  text-decoration: none;
  margin: ${({ variant }) => (variant === 'transparent' ? '13px 44px' : '5px 10px')};
`;

const ButtonTransparent = styled(ButtonWhite)`
  color: ${colors.white};
  background: none;
`;

const ButtonOutline = styled(ButtonWhite)`
  color: ${colors.white};
  background: none;
  border: 1px solid ${colors.white};
  padding: 7px 33px;
`;

const ButtonGradient = styled(ButtonWhite)`
  color: ${colors.white};
  background: ${colors.gradient};
`;
