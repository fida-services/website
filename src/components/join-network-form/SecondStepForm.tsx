import { Dispatch } from 'react';
import styled from 'styled-components';
import { Controller, useFormContext, useWatch } from 'react-hook-form';

import Button from 'components/_common/Button';
import FormTitle from 'components/join-network-form/FormTitle';
import ProfessionsRadioButton from 'components/join-network-form/ProfessionsRadioButton';
import TransparentButton from 'components/_common/TransparentButton';

import { colors } from 'theme';
import { PROFFESIONS } from 'consts';
import { ProfessionsChoiceTexts } from 'components/join-network-form/utils/ProfessionsChoiceTexts';
import { SecondStepData } from 'components/join-network-form/form-contollers/SecondStepController';

import './styles/CheckboxStyles.css';

interface Props {
  setFormStep: Dispatch<React.SetStateAction<1 | 2 | 3>>;
}

const SecondStepForm = ({ setFormStep }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useFormContext<SecondStepData>();

  const professionWatcher = useWatch({
    control: control,
    name: 'user_type',
  });

  return (
    <>
      <FormTitle label={'What type of insurance professional are you?'} size={2} />
      <Controller
        control={control}
        name="user_type"
        render={({ field: { onChange, value } }) => (
          <RadioButtonsContainer>
            <Wrapper
              isChosen={value === PROFFESIONS.INVESTOR}
              onClick={() => onChange(PROFFESIONS.INVESTOR)}
            >
              <ProfessionsRadioButton
                value={value}
                profession={PROFFESIONS.INVESTOR}
                title={ProfessionsChoiceTexts.investor.title}
                description={ProfessionsChoiceTexts.investor.description}
              />
            </Wrapper>
            <Wrapper
              isChosen={value === PROFFESIONS.BROKER}
              onClick={() => onChange(PROFFESIONS.BROKER)}
            >
              <ProfessionsRadioButton
                value={value}
                profession={PROFFESIONS.BROKER}
                title={ProfessionsChoiceTexts.broker.title}
                description={ProfessionsChoiceTexts.broker.description}
              />
            </Wrapper>
            <Wrapper
              isChosen={value === PROFFESIONS.INSURER_OR_UNDERWRITER}
              onClick={() => onChange(PROFFESIONS.INSURER_OR_UNDERWRITER)}
            >
              <ProfessionsRadioButton
                value={value}
                profession={PROFFESIONS.INSURER_OR_UNDERWRITER}
                title={ProfessionsChoiceTexts.insurerUnderwriter.title}
                description={ProfessionsChoiceTexts.insurerUnderwriter.description}
              />
            </Wrapper>
            <Wrapper
              isChosen={value === PROFFESIONS.OTHER}
              onClick={() => onChange(PROFFESIONS.OTHER)}
            >
              <CheckboxWrapper>
                <div className="checkbox-wrapper-15">
                  <div
                    className={`inp-cbx ${value === PROFFESIONS.OTHER && 'checked'}`}
                    id="cbx-15"
                    style={{ display: 'none' }}
                  ></div>
                  <label className="cbx" htmlFor="cbx-15">
                    <span>
                      <svg width="12px" height="9px" viewBox="0 0 12 9">
                        <polyline points="1 5 4 8 11 1"></polyline>
                      </svg>
                    </span>
                  </label>
                </div>
              </CheckboxWrapper>
              <Text>
                <Container>
                  <Title>{ProfessionsChoiceTexts.other.title}</Title>
                  <Description>{ProfessionsChoiceTexts.other.description}</Description>
                </Container>
                <Controller
                  control={control}
                  name="other_professional_"
                  render={({ field: { onChange, value } }) => (
                    <TextareaWrapper>
                      <Textarea
                        disabled={professionWatcher !== PROFFESIONS.OTHER}
                        isCursorPointer={professionWatcher !== PROFFESIONS.OTHER}
                        onChange={(e) => {
                          onChange(e.target.value);
                        }}
                        isRedBorder={!!errors.other_professional_?.message}
                        defaultValue={value}
                      />
                      <TextareaError>{errors.other_professional_?.message}</TextareaError>
                    </TextareaWrapper>
                  )}
                />
              </Text>
            </Wrapper>
            <Error>{errors.user_type?.message}</Error>
          </RadioButtonsContainer>
        )}
      />
      <Button
        label="Next step"
        type="submit"
        onClick={handleSubmit(() => setFormStep(3))}
        expandWidth
        margin="10px 0 0"
        disabled={!isValid}
      />
      <BackButtonWrapper>
        <TransparentButton label="Back" onClick={() => setFormStep(1)} margin="20px 0" />
      </BackButtonWrapper>
    </>
  );
};

export default SecondStepForm;

const RadioButtonsContainer = styled.div`
  position: relative;
`;

const Wrapper = styled.div<{ isChosen: boolean }>`
  display: flex;
  margin: 20px 0;
  box-shadow: 0px 0px 10px rgba(18, 38, 63, 0.1);
  border-radius: 8px;
  padding: ${({ isChosen }) => (isChosen ? `1px` : '2px')};
  ${({ isChosen }) => isChosen && `border: 1px solid ${colors.blue};`};
  ${({ isChosen }) => !isChosen && 'cursor: pointer;'}
`;

const CheckboxWrapper = styled.div`
  padding: 12px 12px 0 4px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Container = styled.div`
  font-family: 'Poppins';
`;

const Title = styled.div`
  font-family: inherit;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  padding: 12px 10px 5px 0;
`;

const Description = styled.div`
  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  padding: 0 15px 13px 0;
`;

const TextareaWrapper = styled.div`
  position: relative;
  padding: 0 15px 13px 0;
  width: 100%;
`;

interface TextareaProps {
  isCursorPointer: boolean;
  isRedBorder?: boolean;
}

const Textarea = styled.textarea<TextareaProps>`
  width: inherit;
  max-width: 100%;
  resize: vertical;
  max-height: 170px;
  padding: 10px;
  border-color: ${({ isRedBorder }) => (isRedBorder ? colors.errorRed : colors.lightGrey)};
  border-radius: 4px;

  ${({ isCursorPointer }) => isCursorPointer && 'cursor: pointer;'}
`;

const Error = styled.div`
  position: absolute;
  font-family: 'Poppins';
  bottom: -23px;
  left: 10px;
  font-size: 12px;
  color: ${colors.errorRed};
`;

const TextareaError = styled(Error)`
  bottom: 1px;
  left: 0;
  font-size: 10px;
`;

const BackButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
