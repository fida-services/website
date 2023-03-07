import styled from 'styled-components';

import { colors } from 'theme';
import { Text } from 'components/_common/Text';

interface Props {
  label: string;
  size: number;
}

const FormTitle = ({ label, size }: Props) => {
  return (
    <TitleWrapper>
      <Text
        label={label}
        color={colors.gradientReversed}
        fontWeight={700}
        size={size}
        linearGradient
      />
    </TitleWrapper>
  );
};

export default FormTitle;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
