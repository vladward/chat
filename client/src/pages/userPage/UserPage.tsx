import { Formik, FormikValues } from 'formik';
import React from 'react';

import { Button, Input } from '../../components';
import { useUpdateUserMutation } from '../../graphql/generated/graphql';

export const UserPage = () => {
  const [updateUser] = useUpdateUserMutation();

  const handleSubmit = async (values: FormikValues) => {
    await updateUser({
      variables: {
        data: {
          name: values.name,
          image: values.image,
          notification: values.notification,
          position: values.position,
          pay_methods: values.pay,
        },
      },
      onCompleted: (res) => {
        console.log(res.updateUser.name, 'updated');
      },
    });
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={{
          name: '',
          image: '',
          position: false,
          notification: false,
          pay: 'CARD',
        }}
      >
        {({ setFieldValue, handleSubmit }) => (
          <div className='loginWrapper'>
            <h4>User page</h4>
            <div className='loginContent'>
              <div className='loginInputs'>
                <Input name='name' label='Введите имя' />
                <input
                  name='image'
                  type='file'
                  onChange={(e) => setFieldValue('image', e?.currentTarget?.files?.[0])}
                  // label='Выберите фото'
                />
                <Input name='position' type='checkbox' label='Выберите позицию' />
                <Input
                  name='notification'
                  type='checkbox'
                  label='Включить нотификации ?'
                />
                <Input name='pay' />
              </div>
              <Button onClick={handleSubmit} text='Сохранить' />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
};
