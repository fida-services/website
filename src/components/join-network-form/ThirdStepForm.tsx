import { Dispatch } from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

import Button from 'components/_common/Button';
import FormTitle from 'components/join-network-form/FormTitle';
import Input from 'components/_common/Input';
import TransparentButton from 'components/_common/TransparentButton';

import { ThirdStepData } from 'components/join-network-form/form-contollers/ThirdStepController';

interface Props {
  setFormStep: Dispatch<React.SetStateAction<1 | 2 | 3>>;
  sendFormData: () => void;
}

const ThirdStepForm = ({ setFormStep, sendFormData }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<ThirdStepData>();

  return (
    <>
      <FormTitle label={'Where do you work?'} size={2} />
      <Input
        {...register('company')}
        label="Company Name*"
        placeholder="Enter your company"
        type="text"
        error={errors.company?.message}
      />
      <Input
        {...register('jobtitle')}
        label="Job Title*"
        placeholder="Enter your job title"
        type="text"
        error={errors.jobtitle?.message}
      />
      <Button
        label="Expand your network"
        type="submit"
        onClick={handleSubmit(sendFormData)}
        expandWidth
        margin="10px 0 0"
        disabled={!isValid}
      />
      <BackButtonWrapper>
        <TransparentButton label="Back" onClick={() => setFormStep(2)} margin="20px 0" />
      </BackButtonWrapper>
    </>
  );
};

export default ThirdStepForm;

const BackButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
