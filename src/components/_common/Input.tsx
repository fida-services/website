import { forwardRef, InputHTMLAttributes, useId } from 'react';
import styled from 'styled-components';

import { colors } from 'theme';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  description?: string;
  placeholder?: string;
}

const Input = forwardRef<HTMLInputElement, Props>(
  ({ error, description, label, placeholder, disabled, onChange, ...rest }, ref) => {
    const id = useId();

    // const apiCall = () => {
    //   axios
    //     .post(
    //       'https://api.hsforms.com/submissions/v3/integration/submit/23903564/2982e69a-90fd-42cb-9067-f3bdabea1f48',
    //       {
    //         fields: [
    //           {
    //             objectTypeId: '0-1',
    //             name: 'firstname',
    //             value: 'Dzban',
    //           },
    //           {
    //             objectTypeId: '0-1',
    //             name: 'test_label',
    //             value: 'two',
    //           },
    //         ],
    //       }
    //     )
    //     .then(function (response) {
    //       console.log(response);
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     });
    // };

    return (
      <>
        {/* <button onClick={apiCall}>API</button> */}
        <InputWrapper>
          <StyledLabel htmlFor={id} errorColors={!!error}>
            {label}
          </StyledLabel>
          <StyledInput
            {...rest}
            onChange={onChange}
            disabled={disabled}
            id={id}
            ref={ref}
            placeholder={placeholder}
            errorColors={!!error}
          />
          {error && <Error>{error}</Error>}
        </InputWrapper>
      </>
    );
  }
);

export default Input;

interface ErrorProps {
  errorColors: boolean;
}

const InputWrapper = styled.div`
  color: black;
  position: relative;
  margin-bottom: 23px;
`;

const StyledLabel = styled.label<ErrorProps>`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  color: ${({ errorColors }) => (errorColors ? colors.errorRed : colors.darkGrey)};
  display: block;
  margin-bottom: 4px;
`;

const StyledInput = styled.input<ErrorProps>`
  display: block;
  width: 100%;
  height: 41px;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid ${({ errorColors }) => (errorColors ? colors.errorRed : colors.lightGrey)};
  transition: 0.1s ease;
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;

  &:hover {
    border-color: ${colors.darkGrey};
  }

  &::-webkit-input-placeholder {
    font-weight: 400;
  }

  &:-ms-input-placeholder {
    font-weight: 400;
  }

  &::placeholder {
    font-weight: 400;
  }
`;

const Error = styled.div`
  font-family: 'Poppins';
  position: absolute;
  top: 70px;
  left: 0px;
  font-size: 12px;
  color: ${colors.errorRed};
`;
