import { CSSProperties } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';
import { Text } from './_common/Text';

interface Props extends StyledProps {
  label: string;
  link: string;
}

interface StyledTagA {
  padding?: CSSProperties['padding']
}
interface StyledProps extends StyledTagA {
  color?: CSSProperties['color'];
  border?: boolean;
  backgroundColor?: CSSProperties['backgroundColor']
}

export const MenuButton = (props: Props) => {
  const { label, color, backgroundColor, border, link, padding } = props;
  return (
    <StyledMenuButton backgroundColor={backgroundColor} border={border}>
      <StyledLink href={link} padding={padding}>
        <Text size={1} color={color} label={label} fontWeight={700} toUpperCase />
      </StyledLink>
    </StyledMenuButton>
  );
};

const StyledMenuButton = styled.button<StyledProps>`
    color: ${({ color }) => (color || colors.white)};
    background: ${({ backgroundColor }) => (backgroundColor || 'unset')};
    border: ${({ border, color }) => (border ? `1px solid ${color || colors.white}` : 'none')};
    border-radius: 25px;
    text-align: center;
    transition: 0.5s;
    width: fit-content;

    &:hover {
    opacity: 0.6;
    }
`;

const StyledLink = styled.a<StyledTagA>`
    display: inline-block;
    font-size: 1rem;
    padding: ${({ padding }) => (padding || '10px 18px')};
    box-sizing: border-box;
    color: ${({ color }) => (color || colors.white)};
    text-decoration: none;
`;
