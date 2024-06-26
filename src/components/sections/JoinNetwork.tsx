import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { ReactComponent as FidaLogo } from 'assets/logos/fida.svg';
import { colors, radius } from 'theme';
import { Text } from 'components/_common/Text';
import { maxWidth1140 } from '../rwd/detectMobile';

const texts = {
  title: 'We look forward to connecting with the community!',
  description: 'We look forward to connecting with the community!',
  buttonLabel: 'Sign up',
  placeholder: 'email@email.com',
};

export const JoinNetwork = () => {
  const isTablet = useMediaQuery({
    query: maxWidth1140,
  });

  return (
    <Wrapper>
      <ContentWrapper>
        <FidaLogo />
        <Text
          color={colors.textPrimaryOnBrand}
          fontWeight={400}
          label={texts.title}
          lineHeight={isTablet ? 38 : 72}
          size={isTablet ? 1.875 : 3.75}
          textPlacing="center"
        />
        <Text
          color={colors.buttonTertiaryColorFg}
          fontFamily="Inter"
          fontWeight={500}
          label={texts.description}
          lineHeight={isTablet ? 20 : 30}
          size={isTablet ? 0.875 : 1.25}
          textPlacing="center"
        />
        <InputWrapper action="https://dev.us17.list-manage.com/subscribe/post?u=6c6ff2be4870ee058f70e6790&amp;id=936d188d9d&amp;f_id=007644e0f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
          <Input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required placeholder={texts.placeholder} />
          <div id="mce-responses" className="clear">
            <div className="response" id="mce-error-response" style={{ display: 'none' }} />
            <div className="response" id="mce-success-response" style={{ display: 'none' }} />
          </div>
          <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
            <input type="text" name="b_6c6ff2be4870ee058f70e6790_936d188d9d" value="" />
          </div>
          <div className="clear">
            <StyledButton type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Sign up" />
          </div>
        </InputWrapper>
      </ContentWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  align-items: center;
  background: ${colors.backgroundGradient};
  border-radius: ${radius['4xl']};
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  margin-top: 56px;
  padding: 64px 16px;
`;

const ContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;

  @media (min-width: 768px) {
    width: 90%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const InputWrapper = styled.form`
  display: flex;
  flex-direction: row;
  gap: 8px;

  @media (min-width: 768px) {
    width: 100%;
  }

  @media (min-width: 1024px) {
    width: 70%;
  }
`;

const StyledButton = styled.input`
  background: ${colors.white};
  border-radius: 25px;
  border: 1px solid ${colors.buttonSecondaryBorder};
  color: ${colors.buttonSecondaryFg};
  font-size: 1rem;
  font-weight: 700;
  line-height: 24px;
  padding: 7px 14px;
  text-align: center;
  transition: 0.5s;
  width: fit-content;

  &:hover {
    opacity: 0.6;
  }
`;

const Input = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.buttonSecondaryBorder};
  border-radius: ${radius.full};
  padding: 10px 14px;

  ::placeholder {
    color: ${colors.textPlaceholder};
    font-family: 'Satoshi-Variable';
    font-weight: 400;
    line-height: 24px;
  }

  :focus-visible {
    outline-color: ${colors.blue};
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`;
