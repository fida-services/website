import styled from 'styled-components';

import { colors } from 'theme';

interface Props {
  label: string;
}

export const Title = (props: Props) => {
  const { label } = props;

  return (
    <StyledSpan>
      {label.toUpperCase()}
    </StyledSpan>
  );
};

const StyledSpan = styled.span`
    color: ${colors.textPrimaryOnBrand};
    font-size: 2.25rem;
    font-weight: 400;
    line-height: 44px;

    white-space: pre-line;
    
    transition: 0.5s;

    @media (min-width: 1024px) {
      line-height: 90px;
      font-size: 4.5rem;
    }
`;
