/* eslint-disable no-else-return */
/* eslint-disable react/no-array-index-key */
import { CSSProperties, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'theme';

interface StyledProps {
  size?: number
  color?: string
  linearGradient?: boolean;
  lineHeight?: number;
  hoverTransition?: boolean;
  noTextWrap?: boolean;
  textPlacing?: CSSProperties['textAlign']
  fontFamily?: CSSProperties['fontFamily']
  fontWeight?: CSSProperties['fontWeight']
}

interface Props extends StyledProps {
  label: string;
  toUpperCase?: boolean
}

const boldReg = /(<rose>|<\/rose>)/;

export const Text = (props: Props) => {
  const { label, toUpperCase, color, linearGradient, lineHeight, size, textPlacing, fontWeight, fontFamily, hoverTransition, noTextWrap } = props;

  const renderText = useCallback(
    (text: string, index: number, isBold: boolean) => (
      <StyledSpan key={index} textPlacing={textPlacing} color={isBold ? colors.rose : color} fontWeight={fontWeight} size={size} linearGradient={linearGradient} lineHeight={lineHeight} hoverTransition={hoverTransition} noTextWrap={noTextWrap} fontFamily={fontFamily}>
        {toUpperCase ? text.toUpperCase() : text}
      </StyledSpan>
    ),
    [props]
  );

  const parts = label?.split(boldReg);
  let isBold = false;

  const formattedText = parts?.map((part, index) => {
    if (part === '<rose>') {
      isBold = true;
      return '';
    } else if (part === '</rose>') {
      isBold = false;
      return '';
    } else {
      return renderText(part, index, isBold);
    }
  });

  return (
    <StyledSpan textPlacing={textPlacing} fontWeight={fontWeight} size={size} linearGradient={linearGradient} lineHeight={lineHeight} hoverTransition={hoverTransition} noTextWrap={noTextWrap} fontFamily={fontFamily}>
      {formattedText}
    </StyledSpan>
  );
};

const StyledSpan = styled.span<StyledProps>`
    color: ${({ color, linearGradient }) => ((color && !linearGradient) ? color : colors.white)};
    background: ${({ linearGradient, color }) => (linearGradient && color ? color : 'none')};
    font-size: ${({ size }) => (size ? `${size}rem` : '16px')};
    text-align: ${({ textPlacing }) => textPlacing || 'left'};
    font-weight: ${({ fontWeight }) => (fontWeight || '500')};
    font-family: ${({ fontFamily }) => (fontFamily || 'Satoshi-Variable')};
    line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '')};

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
