import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';
import { Text } from './_common/Text';

interface Props extends StyledProps {
  label: string;
  link: string;
}

interface StyledTagA {
  isLaunchMarketplace?: boolean
}
interface StyledProps extends StyledTagA {
  color?: CSSProperties['color'];
  border?: boolean;
  backgroundColor?: CSSProperties['backgroundColor']
  isLaunchMarketplace?: boolean
}

export const MenuButton = (props: Props) => {
  const { label, color, backgroundColor, border, link, isLaunchMarketplace } = props;
  return (
    <StyledMenuButton backgroundColor={backgroundColor} border={border}>
      <StyledLink href={link} isLaunchMarketplace={isLaunchMarketplace}>
        <Text size={1} color={color} label={label} fontWeight={700} toUpperCase />
      </StyledLink>
    </StyledMenuButton>
  );
};

const StyledMenuButton = styled.button<StyledProps>`
    color: ${({ color }) => (color || colors.white)};
    background: ${({ backgroundColor }) => (backgroundColor || 'unset')};
    border: ${({ border, color }) => (border ? `1px solid ${color || colors.white}` : 'none')};
    border-radius: 25px;
    text-align: center;
    transition: 0.5s;
    width: fit-content;

    &:hover {
    opacity: 0.6;
    }
`;
const StyledLink = styled.a<StyledTagA>`
    display: inline-block;
    font-size: 1rem;
    padding: 5px 34px;
    padding: ${({ isLaunchMarketplace }) => (isLaunchMarketplace ? '10px 18px' : '5px 34px')};
    box-sizing: border-box;
    color: ${({ color }) => (color || colors.white)};
    text-decoration: none;
`;
