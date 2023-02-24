import styled from 'styled-components';

interface Props {
  marginBottom: number;
  marginTop?: number;
  maxWidth?: number
  lateralPadding?: number;
}

export const StyledGenericWrapper = styled.div<Props>`
  display: flex;
  flex-direction: column;
  padding: 0 ${({ lateralPadding }) => (lateralPadding || '50')}px;
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : 'unset')};
  margin-left: auto;
  margin-right: auto;
  margin-top: ${({ marginTop }) => (marginTop ? `${marginTop}px` : '0')};
  margin-bottom: ${({ marginBottom }) => (marginBottom ? `${marginBottom}px` : '0')};
  align-items: center;
`;
