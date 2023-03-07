import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import FirstStepForm from 'components/join-network-form/FirstStepForm';
import SecondStepForm from 'components/join-network-form/SecondStepForm';
import Stepper from 'components/join-network-form/Stepper';
import ThirdStepForm from 'components/join-network-form/ThirdStepForm';

import { colors } from 'theme';
import { maxHeight670, maxWidth960 } from 'components/rwd/detectMobile';
import { PROFFESIONS } from 'consts';
import { Text } from 'components/_common/Text';
import { useFirstStepController } from 'components/join-network-form/form-contollers/FirstStepController';
import { useSecondStepController } from 'components/join-network-form/form-contollers/SecondStepController';
import { useThirdStepController } from 'components/join-network-form/form-contollers/ThirdStepController';

import { ReactComponent as FidaLogo } from 'assets/logos/fidaLogoBlack.svg';
import SignUpImages from 'assets/images/signUpImages.svg';

const JoinNetworkForm = () => {
  const [formStep, setFormStep] = useState<1 | 2 | 3>(1);

  const firstStepMethods = useFirstStepController();
  const secondStepMethods = useSecondStepController();
  const thirdStepMethods = useThirdStepController();

  const isSmallHeight = useMediaQuery({
    query: maxHeight670,
  });

  const isSmallTablet = useMediaQuery({
    query: maxWidth960,
  });

  const sendFormData = () => {
    axios
      .post(
        'https://api.hsforms.com/submissions/v3/integration/submit/23903564/05e9d506-8e04-4b1c-8c8c-0b2faa4d0645',
        {
          fields: [
            {
              objectTypeId: '0-1',
              name: 'email',
              value: firstStepMethods.getValues('email'),
            },
            {
              objectTypeId: '0-1',
              name: 'firstname',
              value: firstStepMethods.getValues('firstname'),
            },
            {
              objectTypeId: '0-1',
              name: 'lastname',
              value: firstStepMethods.getValues('lastname'),
            },
            {
              objectTypeId: '0-1',
              name: 'company',
              value: thirdStepMethods.getValues('company'),
            },
            {
              objectTypeId: '0-1',
              name: 'jobtitle',
              value: thirdStepMethods.getValues('jobtitle'),
            },
            {
              objectTypeId: '0-1',
              name: 'user_type',
              value: secondStepMethods.getValues('user_type'),
            },
            {
              objectTypeId: '0-1',
              name: 'other_professional_',
              value:
                secondStepMethods.getValues('user_type') === PROFFESIONS.OTHER
                  ? secondStepMethods.getValues('other_professional_')
                  : '',
            },
          ],
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const renderForm = () => {
    switch (formStep) {
      case 1:
        return (
          <FormProvider {...firstStepMethods}>
            <FirstStepForm setFormStep={setFormStep} />
          </FormProvider>
        );
      case 2:
        return (
          <FormProvider {...secondStepMethods}>
            <SecondStepForm setFormStep={setFormStep} />
          </FormProvider>
        );
      case 3:
        return (
          <FormProvider {...thirdStepMethods}>
            <ThirdStepForm setFormStep={setFormStep} sendFormData={sendFormData} />
          </FormProvider>
        );
    }
  };

  return (
    <Wrapper>
      <StyledForm>
        <Link to="/">
          <StyledFidaLogo />
        </Link>
        <Stepper formStep={formStep} />
        {renderForm()}
      </StyledForm>
      {!isSmallTablet && (
        <Info>
          <Background />
          <TextWrapper>
            <Text
              label={'Great investment opportunities decorrelated from capital markets.'}
              size={isSmallHeight ? 2 : 2.3}
              color={colors.gradientReversed}
              linearGradient
            />
          </TextWrapper>
        </Info>
      )}
    </Wrapper>
  );
};

export default JoinNetworkForm;

const Wrapper = styled.div`
  width: 100vw;

  @media (min-width: 961px) {
    display: flex;
  }

  @media (max-width: 960px) {
    overflow-y: auto;
  }
`;

const StyledForm = styled.form`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  padding: 30px 30px;
  color: ${colors.mainBlack};

  @media (min-width: 961px) {
    overflow-y: auto;
    max-height: 100vh;
  }

  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;

const Info = styled.div`
  position: relative;
  flex-grow: 1;
  flex-basis: 60%;
  padding: 0 0 0 40px;
  background-color: ${colors.bgcGrey};
`;

const StyledFidaLogo = styled(FidaLogo)`
  min-width: 88px;
  min-height: 40px;
`;

const Background = styled.div`
  max-width: 800px;
  min-height: 100vh;
  margin-right: auto;
  background-image: url(${SignUpImages});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

const TextWrapper = styled.div`
  position: absolute;
  top: 100px;
  left: 60px;
  max-width: 600px;
  margin-right: 20px;

  @media (max-height: 620px) {
    top: 65px;
    left: 40px;
  }
`;
