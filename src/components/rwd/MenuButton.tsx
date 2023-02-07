import { Text } from 'components/_common/Text';
import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

interface Props extends StyledProps {
  label: string;
  link: string;
}
interface StyledProps {
  color?: CSSProperties['color'];
}

export const MenuButton = (props: Props) => {
  const { label, color, link } = props;
  return (
    <StyledMenuButton>
      <StyledLink href={link}>
        <Text size={2} color={color} label={label} fontWeight={700} toUpperCase />
      </StyledLink>
    </StyledMenuButton>
  );
};

const StyledMenuButton = styled.button<StyledProps>`
      background: none;
      text-align: left;
      color: ${({ color }) => (color || colors.white)};
      border-radius: 25px;
  `;
const StyledLink = styled.a`
      display: inline-block;
      font-size: 16px;
      padding: 32px 0;
      box-sizing: border-box;
      color: ${({ color }) => (color || colors.white)};
      text-decoration: none;
  `;
