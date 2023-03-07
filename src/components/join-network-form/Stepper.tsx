import styled from 'styled-components';

import './styles/Stepper.css';

interface Props {
  formStep: number;
}

const Stepper = ({ formStep }: Props) => {
  return (
    <StepperWrapper className="stepper-wrapper">
      <div className={`stepper-item ${formStep === 1 ? 'active' : 'completed'}`}>
        <div className="step-counter">1</div>
      </div>
      <div
        className={`stepper-item ${formStep === 2 ? 'active' : formStep === 3 ? 'completed' : ''}`}
      >
        <div className="step-counter">2</div>
      </div>
      <div className={`stepper-item ${formStep === 3 ? 'active' : ''}`}>
        <div className="step-counter">3</div>
      </div>
    </StepperWrapper>
  );
};

export default Stepper;

const StepperWrapper = styled.div`
  margin: 30px 0;
`;
