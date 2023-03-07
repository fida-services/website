import styled from 'styled-components';

import './styles/CheckboxStyles.css';

import { Profession } from 'components/join-network-form/form-contollers/SecondStepController';

interface Props {
  value: Profession;
  profession: Profession;
  title: string;
  description: string;
}

const ProfessionsRadioButton = ({ value, profession, title, description }: Props) => {
  return (
    <>
      <CheckboxWrapper>
        <div className="checkbox-wrapper-15">
          <div
            className={`inp-cbx ${value === profession && 'checked'}`}
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
          <Title>{title}</Title>
          <Description>{description}</Description>
        </Container>
      </Text>
    </>
  );
};

export default ProfessionsRadioButton;

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
