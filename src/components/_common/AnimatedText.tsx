/* eslint-disable no-else-return */
/* eslint-disable no-nested-ternary */
import { transformVariant, transition } from 'constants/motionConfig';
import { motion, MotionStyle } from 'framer-motion';
import { CSSProperties, useCallback } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

interface StyledProps {
  animatedStyle?: MotionStyle
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
  isRoseText?: boolean
  toUpperCase?: boolean
}

const roseReg = /(<rose>|<\/rose>)/;

export const AnimatedText = (props: Props) => {
  const { animatedStyle, label, toUpperCase, color, linearGradient, lineHeight, size, textPlacing, fontWeight, fontFamily, hoverTransition, noTextWrap, isRoseText } = props;

  const renderText = useCallback(
    (text: string, index: number, isRose: boolean) => (
      <StyledSpan
        variants={transformVariant}
        initial="hidden"
        whileInView="visible"
        animate="show"
        style={animatedStyle}
        key={index}
        textPlacing={textPlacing}
        color={isRose ? colors.rose : color}
        fontWeight={fontWeight}
        size={size}
        linearGradient={linearGradient}
        lineHeight={lineHeight}
        hoverTransition={hoverTransition}
        noTextWrap={noTextWrap}
        fontFamily={fontFamily}
        transition={transition}
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
      variants={transformVariant}
      initial="hidden"
      animate="show"
      whileInView="visible"
      style={animatedStyle}
      textPlacing={textPlacing}
      color={color}
      fontWeight={fontWeight}
      size={size}
      linearGradient={linearGradient}
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
`;
