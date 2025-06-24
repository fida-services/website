/* eslint-disable no-else-return */
/* eslint-disable no-nested-ternary */
import { transformVariant, transition } from 'constants/motionConfig';
import { motion } from 'framer-motion';
import { CSSProperties, useCallback } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

interface StyledProps {
  size?: number
  color?: string
  lineHeight?: number;
  hoverTransition?: boolean;
  noTextWrap?: boolean;
  textPlacing?: CSSProperties['textAlign']
  fontFamily?: CSSProperties['fontFamily']
  fontWeight?: CSSProperties['fontWeight']
}

interface Props extends StyledProps {
  label: string;
  isRoseText?: boolean
  toUpperCase?: boolean
}

const roseReg = /(<rose>|<\/rose>)/;

export const AnimatedText = (props: Props) => {
  const {
    color,
    fontFamily,
    fontWeight,
    hoverTransition,
    isRoseText,
    label,
    lineHeight,
    noTextWrap,
    size,
    textPlacing,
    toUpperCase
  } = props;

  const renderText = useCallback(
    (text: string, index: number, isRose: boolean) => (
      <StyledSpan
        variants={transformVariant}
        initial="hidden"
        whileInView="visible"
        key={index}
        textPlacing={textPlacing}
        color={isRose ? colors.rose : color}
        fontWeight={fontWeight}
        size={size}
        lineHeight={lineHeight}
        hoverTransition={hoverTransition}
        noTextWrap={noTextWrap}
        fontFamily={fontFamily}
        transition={transition}
      >
        {toUpperCase ? text.toUpperCase() : text}
      </StyledSpan>
    ),
    // props already has these dependencies
    // eslint-disable-next-line
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
      variants={transformVariant}
      initial="hidden"
      whileInView="visible"
      textPlacing={textPlacing}
      color={color}
      fontWeight={fontWeight}
      size={size}
      lineHeight={lineHeight}
      hoverTransition={hoverTransition}
      noTextWrap={noTextWrap}
      fontFamily={fontFamily}
      transition={transition}
    >
      {isRoseText ? formattedText : toUpperCase ? label.toUpperCase() : label}
    </StyledSpan>
  );
};

const StyledSpan = styled(motion.span)<StyledProps>`
    color: ${({ color }) => (color || colors.white)};
    font-size: ${({ size }) => (size ? `${size}rem` : '16px')};
    text-align: ${({ textPlacing }) => textPlacing || 'left'};
    font-weight: ${({ fontWeight }) => (fontWeight || '500')};
    font-family: ${({ fontFamily }) => (fontFamily || 'Satoshi-Variable')};
    line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '')};

    white-space: pre-line;

    ${({ noTextWrap }) => noTextWrap && 'white-space: nowrap;'}
`;
