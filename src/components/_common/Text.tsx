/* eslint-disable no-else-return */
/* eslint-disable no-nested-ternary */
import { CSSProperties, useCallback } from 'react';
import styled, { css } from 'styled-components';

import { colors } from 'theme';

interface StyledProps {
  color?: string
  fontFamily?: CSSProperties['fontFamily']
  fontWeight?: CSSProperties['fontWeight']
  hoverTransition?: boolean;
  lineHeight?: number;
  link?: {
    label: string
    href: string
  }
  noTextWrap?: boolean;
  size?: number
  style?: React.CSSProperties
  textPlacing?: CSSProperties['textAlign']
}

interface Props extends StyledProps {
  label: string;
  isRoseText?: boolean
  toUpperCase?: boolean
  onClick?: () => void
}

const roseReg = /(<rose>|<\/rose>)/;

export const Text = (props: Props) => {
  const {
    color,
    fontFamily,
    fontWeight,
    hoverTransition,
    isRoseText,
    label,
    lineHeight,
    link,
    noTextWrap,
    size,
    style,
    textPlacing,
    toUpperCase,
    onClick
  } = props;

  const renderText = useCallback(
    (text: string, index: number, isRose: boolean) => (
      <StyledSpan
        color={isRose ? colors.rose : color}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        hoverTransition={hoverTransition}
        key={index}
        lineHeight={lineHeight}
        noTextWrap={noTextWrap}
        size={size}
        style={style}
        textPlacing={textPlacing}
      >
        {toUpperCase ? text.toUpperCase() : text}
      </StyledSpan>
    ),
    [props]
  );

  const parts = label?.split(roseReg);
  let isRose = false;

  const formattedText = parts?.map((part, index) => {
    if (part === '<rose>') {
      isRose = true;
      return '';
    } else if (part === '</rose>') {
      isRose = false;
      return '';
    } else {
      return renderText(part, index, isRose);
    }
  });

  return (
    <StyledSpan
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      hoverTransition={hoverTransition}
      lineHeight={lineHeight}
      noTextWrap={noTextWrap}
      size={size}
      style={style}
      textPlacing={textPlacing}
      onClick={onClick}
    >
      {isRoseText ? formattedText : toUpperCase ? label.toUpperCase() : label}
      {link ? (
        <StyledLink href={link?.href}>
          {link?.label}
        </StyledLink>
      ) : null}
    </StyledSpan>
  );
};

const StyledSpan = styled.span<StyledProps>`
    color: ${({ color }) => (color || colors.white)};
    font-size: ${({ size }) => (size ? `${size}rem` : '16px')};
    text-align: ${({ textPlacing }) => textPlacing || 'left'};
    font-weight: ${({ fontWeight }) => (fontWeight || '500')};
    font-family: ${({ fontFamily }) => (fontFamily || 'Satoshi-Variable')};
    line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '')};

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

const StyledLink = styled.a`
    color: ${colors.rose};
`;
