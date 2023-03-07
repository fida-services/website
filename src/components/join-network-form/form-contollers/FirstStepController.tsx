import { useMemo } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { requiredField } from 'consts';

export interface FirstStepData {
  firstname: string;
  lastname: string;
  email: string;
}

export const useFirstStepController = () => {
  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      firstname: Yup.string().trim().required(requiredField).max(40, 'Max 40 characters'),
      lastname: Yup.string().trim().required(requiredField).max(40, 'Max 40 characters'),
      email: Yup.string()
        .trim()
        .required(requiredField)
        .email('Please enter a valid email address')
        .max(128, 'Max 128 characters'),
    });
  }, []);

  return useForm<FirstStepData>({
    resolver: yupResolver(validationSchema),
    mode: 'onSubmit',
  });
};
