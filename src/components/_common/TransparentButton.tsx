import { CSSProperties } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

interface Props {
  onClick?: () => void;
  label: string;
  margin?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  textTransform?: CSSProperties['textTransform'];
}

const TransparentButton = ({ onClick, label, type, disabled, margin, textTransform }: Props) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      type={type}
      margin={margin}
      textTransform={textTransform}
    >
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<Pick<Props, 'textTransform' | 'margin'>>`
  background: none;
  border: none;
  border-radius: 25px;
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: 0.5s;
  margin: ${({ margin }) => (margin ? margin : '0')};
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`};
  color: ${colors.blue};

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    color: ${colors.lightGrey};
    cursor: unset;
  }

  &:hover:disabled {
    opacity: 1;
  }
`;

export default TransparentButton;
