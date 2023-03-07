import { useMemo } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { requiredField } from 'consts';
import { PROFFESIONS } from 'consts';

export type Profession = (typeof PROFFESIONS)[keyof typeof PROFFESIONS];

export interface SecondStepData {
  user_type: Profession;
  other_professional_: string;
}

export const useSecondStepController = () => {
  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      user_type: Yup.string().trim().required('Please choose one answer'),
      other_professional_: Yup.string()
        .when('user_type', {
          is: PROFFESIONS.OTHER,
          then: (schema) => schema.required(requiredField),
        })
        .max(40, 'Max 40 characters'),
    });
  }, []);

  return useForm<SecondStepData>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
};
