import { useMemo } from 'react';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { requiredField } from 'consts';

export interface ThirdStepData {
  company: string;
  jobtitle: string;
}

export const useThirdStepController = () => {
  const validationSchema = useMemo(() => {
    return Yup.object().shape({
      company: Yup.string().trim().required(requiredField).max(50, 'Max 50 characters'),
      jobtitle: Yup.string().trim().required(requiredField).max(50, 'Max 50 characters'),
    });
  }, []);

  return useForm<ThirdStepData>({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
  });
};
