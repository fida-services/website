import { useMediaQuery } from '@mui/material';
import { maxWidth840 } from 'components/rwd/detectMobile';
import { ChangeEvent } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

import { motion } from 'framer-motion';
import { transition, transformVariant } from 'constants/motionConfig';
import PlusIcon from '../../assets/icons/plus.svg';
import MinusIcon from '../../assets/icons/minus.svg';

interface Props {
  value: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Counter = ({ value, handleIncrement, handleDecrement, handleChange }: Props) => {
  const isTablet = useMediaQuery(maxWidth840);

  return (
    <CounterContainer
      initial="hidden"
      transition={transition}
      variants={transformVariant}
      whileInView="visible"
    >
      <StyledLabel>
        Amount:
      </StyledLabel>
      <InputContainer>
        {isTablet && <Button onClick={handleIncrement} disabled={value === 5}>+</Button>}
        <NumberInput
          type="number"
          value={value}
          onChange={handleChange}
          min="1"
          max="5"
        />
        {!isTablet && <Button onClick={handleIncrement} disabled={value === 5}><img src={PlusIcon} alt="plus" /></Button>}
        <Button onClick={handleDecrement} disabled={value === 1}><img src={MinusIcon} alt="minus" loading="lazy" /></Button>
      </InputContainer>
    </CounterContainer>
  );
};

const CounterContainer = styled(motion.div)`
    display: flex;
    gap: 12px;
    align-items: center;

    @media (max-width: 840px) {
        flex-direction: column;
  }
`;

const StyledLabel = styled.span`
    color: ${colors.textTertiary600};
    font-size: 1.5rem;
    font-weight: 500;

    transition: 0.5s;

     @media (max-width: 640px) {
        font-size: 1rem;
    }
`;

const NumberInput = styled.input`
  width: 200px;
  height: 56px;
  text-align: center;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 24px;
  background-color: white;
  color: ${colors.textTertiary600};
  font-size: 24px;
  outline: none;
  -moz-appearance: textfield; /* Remove Firefox arrows */

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none; /* Remove Chrome arrows */
    margin: 0;
  }

    @media (max-width: 640px) {
        height: 42px;
        font-size: 18px;
    }
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;

const Button = styled.button<{ disabled: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: 1px solid #ccc;
  background-color: ${props => (props.disabled ? 'rgba(255,255,255,0.7)' : 'white')};
  color: black;
  opacity: ${props => (props.disabled ? '0.5' : '1')};
  font-size: 32px;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 640px) {
        height: 42px;
        width: 42px;
    }
`;
