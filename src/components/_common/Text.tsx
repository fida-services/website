import React, { CSSProperties } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

interface Props extends StyledProps {
  label: string;
  toUpperCase?: boolean
}
interface StyledProps {
  size?: number
  color?: string
  linearGradient?: boolean
  textPlacing?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
}

export const Text = (props: Props) => {
  const { label, toUpperCase, color, linearGradient, size, textPlacing, fontWeight } = props;

  return (
    <StyledSpan textPlacing={textPlacing} fontWeight={fontWeight} size={size} color={color} linearGradient={linearGradient}>
      {toUpperCase ? label.toUpperCase() : label}
    </StyledSpan>
  );
};

const StyledSpan = styled.span<StyledProps>`
    color: ${({ color, linearGradient }) => ((color && !linearGradient) ? color : colors.white)};
    background: ${({ linearGradient, color }) => (linearGradient && color ? color : 'none')};
    font-size: ${({ size }) => (size ? `${size}px` : '16px')};
    text-align: ${({ textPlacing }) => textPlacing || 'left'};
    font-weight: ${({ fontWeight }) => (fontWeight || '500')};

    background-clip: ${({ linearGradient }) => (linearGradient ? 'text' : 'none')};
    -webkit-background-clip: ${({ linearGradient }) => (linearGradient ? 'text' : 'none')};;
    -webkit-text-fill-color: ${({ linearGradient }) => (linearGradient ? 'transparent' : 'none')};;
`;
