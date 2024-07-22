import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { Text } from 'components/_common/Text';
import { colors } from 'theme';
import { maxWidth840 } from '../rwd/detectMobile';

interface BaseTextWithDescriptionProps {
  description: string
  link?: {
    label: string
    href: string
  }
  title: string
  id?: string
}

export const BaseTextWithDescription = (props: BaseTextWithDescriptionProps) => {
  const { description, link, title, id } = props;
  const isTablet = useMediaQuery({
    query: maxWidth840,
  });

  return (
    <Container id={id}>
      <Text
        color={colors.textPrimaryOnBrand}
        fontWeight={700}
        label={title}
        size={isTablet ? 1.25 : 2.25}
        lineHeight={isTablet ? 30 : 44}
      />
      <Text
        color={colors.textTertiary600}
        fontFamily="Inter"
        fontWeight={500}
        label={description}
        lineHeight={isTablet ? 24 : 30}
        link={link}
        size={isTablet ? 1 : 1.25}
        textPlacing="center"
      />
    </Container>
  );
};

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 48px 16px;

  @media (min-width: 1024px) {
    padding: 120px 100px;
  }
`;

// const Description = styled.span`
//     color: ${({ color }) => (color || colors.white)};
//     font-size: ${({ size }) => (size ? `${size}rem` : '16px')};
//     text-align: ${({ textPlacing }) => textPlacing || 'left'};
//     font-weight: ${({ fontWeight }) => (fontWeight || '500')};
//     font-family: ${({ fontFamily }) => (fontFamily || 'Satoshi-Variable')};
//     line-height: ${({ lineHeight }) => (lineHeight ? `${lineHeight}px` : '')};

//     white-space: pre-line;

//     ${({ noTextWrap }) => noTextWrap && 'white-space: nowrap;'}
//     transition: 0.5s;

//       &:hover {
//       ${({ hoverTransition }) => hoverTransition
//         && css`
//           opacity: 0.7;
//         `}
//       }
// `;
