import { CSSProperties } from 'react';
import styled from 'styled-components';

import gradientBackground from 'assets/shapes/gradientBackground.png';

interface Props {
  height?: number;
  width?: number;
  alignItems?: CSSProperties['alignItems'];
  marginX?: number;
}

export const StyledGradientBackground = styled.div<Props>`
  display: flex;
  justify-content: center;
  align-items: ${({ alignItems }) => (alignItems || 'center')};
  border-radius: 25px;
  margin: ${({ marginX }) => (`0 ${marginX}px` || 0)};
  background-image: url(${gradientBackground});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: visible;
  width: ${({ width }) => (width ? `${width}px` : 'unset')};
  height: ${({ height }) => (height ? `${height}px` : 'auto')};
  
  @media (max-width: 840px) {
    margin-bottom: 40px;
    flex-direction: column;
    max-width: 90vw;
  }
`;
