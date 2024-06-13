import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { ReactComponent as FidaLogo } from 'assets/logos/fida.svg';
import { colors, radius } from 'theme';
import { Text } from 'components/_common/Text';
import { maxWidth840, maxWidth1140 } from '../rwd/detectMobile';

const texts = {
  title: 'We look forward to connecting with the community!',
  description: 'We look forward to connecting with the community!',
  buttonLabel: 'Sign up',
  placeholder: 'email@email.com'
};

export const JoinNetwork = () => {
  const isMobile = useMediaQuery({
    query: maxWidth840,
  });

  const isTablet = useMediaQuery({
    query: maxWidth1140,
  });

  return (
    <Wrapper>
      <FidaLogo />
      <Text
        color={colors.text_primary_on_brand}
        fontFamily="Inter"
        fontWeight={500}
        label={texts.title}
        size={isTablet ? 1.5 : 2.25}
      />
      <Text
        color={colors.text_primary_on_brand}
        fontFamily="Inter"
        fontWeight={500}
        label={texts.description}
        size={isTablet ? 1.5 : 2.25}
      />
      <InputWrapper>
        <input placeholder={texts.placeholder} />
        <StyledButton>
          <Text
            size={1}
            color={colors.button_secondary_fg}
            label={texts.buttonLabel}
            lineHeight={24}
            fontWeight={700}
          />
        </StyledButton>
      </InputWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${colors.backgroundGradient};
  border-radius: ${radius['4xl']};
  display: flex;
  flex-direction: column;
  margin-top: 56px;

  // @media (min-width: 1024px) {
  //   align-items: center;
  //   flex-direction: row;
  //   margin-top: 0px;
  //   overflow: hidden;
  // }
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;

// @media (min-width: 1024px) {
//   align-items: center;
//   flex-direction: row;
//   margin-top: 0px;
//   overflow: hidden;
// }
`;

const StyledButton = styled.button`
    // color: ${colors.button_secondary_fg};
    background: ${colors.white};
    border: 1px solid ${colors.button_secondary_border};
    border-radius: 25px;
    text-align: center;
    transition: 0.5s;
    width: fit-content;

    &:hover {
    opacity: 0.6;
    }
`;
