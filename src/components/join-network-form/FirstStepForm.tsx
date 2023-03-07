import { Dispatch } from 'react';
import styled from 'styled-components';
import { useFormContext, useWatch } from 'react-hook-form';

import Button from 'components/_common/Button';
import FormTitle from 'components/join-network-form/FormTitle';
import Input from 'components/_common/Input';

import { colors } from 'theme';
import { FirstStepData } from 'components/join-network-form/form-contollers/FirstStepController';

interface Props {
  setFormStep: Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

const FirstStepForm = ({ setFormStep }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<FirstStepData>();

  const watcher = useWatch({
    control: control,
  });

  const isSubmitButtonActive =
    watcher.firstname &&
    watcher.firstname !== '' &&
    watcher.lastname &&
    watcher.lastname !== '' &&
    watcher.email &&
    watcher.email !== '';

  return (
    <>
      <FormTitle label={'Join the Fida Professional Insurance Network'} size={2} />
      <Input
        {...register('firstname')}
        label="First Name*"
        placeholder="Enter your first name"
        type="text"
        error={errors.firstname?.message}
      />
      <Input
        {...register('lastname')}
        label="Last Name*"
        placeholder="Enter your last name"
        type="text"
        error={errors.lastname?.message}
      />
      <Input
        {...register('email')}
        label="Email Address*"
        placeholder="Enter your email address"
        type="text"
        error={errors.email?.message}
      />
      <Button
        label="Join Fida Network"
        type="submit"
        onClick={handleSubmit(() => setFormStep(2))}
        expandWidth
        margin="10px 0 0"
        disabled={!isSubmitButtonActive}
      />
      <Terms>
        By registering you agree to the Fida {'\n'} <StyledLink href="#">Terms of Use</StyledLink>{' '}
        and <StyledLink href="#">Privacy Policy</StyledLink>
      </Terms>
    </>
  );
};

export default FirstStepForm;

const Terms = styled.div`
  color: ${colors.darkGrey};
  text-align: center;
  white-space: pre-line;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  margin-top: 20px;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: ${colors.blue};
`;
