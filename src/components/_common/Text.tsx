import React, { CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'theme';

interface StyledProps {
  size?: number
  color?: string
  linearGradient?: boolean;
  hoverTransition?: boolean;
  noTextWrap?: boolean;
  textPlacing?: CSSProperties['textAlign']
  fontWeight?: CSSProperties['fontWeight']
}

interface Props extends StyledProps {
  label: string;
  toUpperCase?: boolean
}

export const Text = (props: Props) => {
  const { label, toUpperCase, color, linearGradient, size, textPlacing, fontWeight, hoverTransition, noTextWrap } = props;

  return (
    <StyledSpan textPlacing={textPlacing} fontWeight={fontWeight} size={size} color={color} linearGradient={linearGradient} hoverTransition={hoverTransition} noTextWrap={noTextWrap}>
      {toUpperCase ? label.toUpperCase() : label}
    </StyledSpan>
  );
};

const StyledSpan = styled.span<StyledProps>`
    color: ${({ color, linearGradient }) => ((color && !linearGradient) ? color : colors.white)};
    background: ${({ linearGradient, color }) => (linearGradient && color ? color : 'none')};
    font-size: ${({ size }) => (size ? `${size}rem` : '16px')};
    text-align: ${({ textPlacing }) => textPlacing || 'left'};
    font-weight: ${({ fontWeight }) => (fontWeight || '500')};

    background-clip: ${({ linearGradient }) => (linearGradient ? 'text' : 'none')};
    -webkit-background-clip: ${({ linearGradient }) => (linearGradient ? 'text' : 'none')};
    -webkit-text-fill-color: ${({ linearGradient }) => (linearGradient ? 'transparent' : 'none')};

    white-space: pre-line;

    ${({ noTextWrap }) => noTextWrap && 'white-space: nowrap;'}
    
    transition: 0.5s;

      &:hover {
      ${({ hoverTransition }) => hoverTransition
        && css`
          opacity: 0.7;
        `}
      }
`;
