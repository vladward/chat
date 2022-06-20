import './Registration.css';

import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input, RequestHandler } from '../../components';
import { useSendCodeMutation } from '../../graphql/generated/graphql';

export const Registration: FC = () => {
  const navigate = useNavigate();

  const [sendCode, { loading }] = useSendCodeMutation();

  const handleSubmit = async (values: InitialValuesType) => {
    if (values.phone) {
      await sendCode({
        variables: {
          data: {
            phone: String(values.phone),
            is_partner: values.is_partner || false,
          },
        },
        onCompleted: (res) => {
          if (res.sendCode) navigate('/login');
        },
      });
    }
  };

  return (
    <RequestHandler loading={loading}>
      <Formik onSubmit={handleSubmit} initialValues={{ phone: '', is_partner: false }}>
        <Form>
          <div className='registrationWrapper'>
            <h4>Пожалуйста, введите номер телефона для получения кода</h4>
            <div className='registrationContent'>
              <div className='registrationInputs'>
                <Input label='Введите номер телефона' name='phone' />
              </div>
              <Button type='submit' text='Выслать код' />
            </div>
          </div>
        </Form>
      </Formik>
    </RequestHandler>
  );
};

type InitialValuesType = {
  phone: string;
  is_partner: boolean;
};
