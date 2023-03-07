import { CSSProperties } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

interface Props {
  onClick?: () => void;
  label: string;
  expandWidth?: boolean;
  margin?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  textTransform?: CSSProperties['textTransform'];
}

const Button = ({ onClick, label, type, disabled, expandWidth, textTransform, margin }: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      expandWidth={expandWidth}
      textTransform={textTransform}
      margin={margin}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<Pick<Props, 'textTransform' | 'margin' | 'expandWidth'>>`
  text-align: center;
  background: ${colors.blue};
  border: none;
  border-radius: 25px;
  padding: 8px 34px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
  margin: ${({ margin }) => (margin ? margin : '0')};
  color: ${colors.white};
  ${({ expandWidth }) => expandWidth && 'width: 100%;'};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`};

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    background-color: ${colors.lightGrey};
    cursor: unset;
  }

  &:hover:disabled {
    opacity: 1;
  }
`;

export default Button;
