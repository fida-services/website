import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';
import { Text } from './_common/Text';

interface Props extends StyledProps {
  label: string;
  link: string;
}
interface StyledProps {
  color?: CSSProperties['color'];
  border?: boolean;
  backgroundColor?: CSSProperties['backgroundColor']
}

export const MenuButton = (props: Props) => {
  const { label, color, backgroundColor, border, link } = props;
  return (
    <StyledMenuButton backgroundColor={backgroundColor} border={border}>
      <StyledLink href={link}>
        <Text size={1} color={color} label={label} fontWeight={700} toUpperCase />
      </StyledLink>
    </StyledMenuButton>
  );
};

const StyledMenuButton = styled.button<StyledProps>`
    margin: 5px 10px;
    text-align: left;
    color: ${({ color }) => (color || colors.white)};
    background: ${({ backgroundColor }) => (backgroundColor || 'unset')};
    border: ${({ border, color }) => (border ? `1px solid ${color || colors.white}` : 'none')};
    border-radius: 25px;
    text-align: center;
    transition: 0.5s;

    &:hover {
    opacity: 0.6;
    }
`;
const StyledLink = styled.a`
    display: inline-block;
    font-size: 1rem;
    padding: 5px 34px;
    box-sizing: border-box;
    color: ${({ color }) => (color || colors.white)};
    text-decoration: none;
`;
