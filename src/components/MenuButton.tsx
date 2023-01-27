import React from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

import { Text } from './_common/Text';

interface Props extends StyledProps {
  label: string;
  link: string;
}
interface StyledProps {
  color?: string;
  border?: boolean;
}

export const MenuButton = (props: Props) => {
  const { label, color, border, link } = props;
  return (
    <StyledMenuButton border={border}>
      <StyledLink href={link}>
        <Text size={16} color={color} label={label} fontWeight={700} toUpperCase />
      </StyledLink>
    </StyledMenuButton>
  );
};

const StyledMenuButton = styled.button<StyledProps>`
    padding: 5px 10px;
    line-height: '100%';
    background: none;
    color: ${({ color }) => (color || colors.white)};
    border: ${({ border, color }) => (border ? `1px solid ${color || colors.white}` : 'none')};
    border-radius: ${({ border }) => (border ? '25px' : 'none')};
`;
const StyledLink = styled.a`
    font-size: 16px;
    margin: 0 34px;
    color: ${({ color }) => (color || colors.white)};
    text-decoration: none;
    
`;
