import './Login.css';

import { Form, Formik } from 'formik';
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Input, RequestHandler } from '../../components';
import { useAuthContext } from '../../context';
import { useLoginLazyQuery } from '../../graphql/generated/graphql';

export const Login: FC = () => {
  const navigate = useNavigate();

  const [login, { loading, error }] = useLoginLazyQuery();

  const { onSuccessAuth } = useAuthContext();

  const handleSubmitLogin = async (values: InitialValuesType) => {
    if (values.phone && values.code) {
      await login({
        variables: {
          data: {
            phone: String(values.phone),
            code: Number(values.code),
            is_partner: false,
          },
        },
        onCompleted: (res) => {
          if (res.login.access_token) {
            onSuccessAuth(res.login.access_token);
            navigate('/home');
          }
        },
      });
    }
  };
  return (
    <RequestHandler backgroundLoading={loading} error={error}>
      <Formik onSubmit={handleSubmitLogin} initialValues={{ phone: '', code: '' }}>
        <Form>
          <div className='loginWrapper'>
            <h4>Вход</h4>
            <div className='loginContent'>
              <div className='loginInputs'>
                <Input name='phone' label='Введите номер телефона' />
                <Input name='code' label='Введите проверочный код' />
              </div>
              <Button type='submit' text='Войти' />
            </div>
          </div>
        </Form>
      </Formik>
    </RequestHandler>
  );
};

type InitialValuesType = {
  phone: string;
  code: string;
};
