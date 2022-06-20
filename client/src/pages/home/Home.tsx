import { Form, Formik } from 'formik';
import React, { FC, useEffect, useState } from 'react';

import { Button, Input } from '../../components';
import {
  useGetCurrentUserQuery,
  useMessageSentSubscription,
  useSendMessageMutation,
} from '../../graphql/generated/graphql';

type MessageType = {
  id: number;
  message: string;
  order_id: number;
  image: string;
};

export const Home: FC<HomeType> = () => {
  const [messages, setMessages] = useState<any>([{}]);
  const [sendMessage] = useSendMessageMutation();
  const { data: getCurrentUser } = useGetCurrentUserQuery();
  const { data } = useMessageSentSubscription();

  const handleSubmit = async (values: { inputMessage: string }) => {
    await sendMessage({
      variables: {
        data: {
          message: values.inputMessage,
          order_id: '4',
        },
      },
    });
    values.inputMessage = '';
  };

  useEffect(() => {
    if (data?.messageSent?.id) {
      setMessages((prevState: any) => [...prevState, data?.messageSent]);
    }
  }, [data?.messageSent]);

  return (
    <div>
      <h1>home</h1>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          maxHeight: '50vh',
          width: '350px',
          overflowY: 'scroll',
        }}
      >
        {messages.map((mess: MessageType, index: number) => {
          return (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent:
                  Number(mess.id) === Number(getCurrentUser?.getCurrentUser.id)
                    ? 'flex-end'
                    : 'flex-start',
              }}
            >
              <span>{mess.message}</span>
            </div>
          );
        })}
      </div>
      <Formik onSubmit={handleSubmit} initialValues={{ inputMessage: '' }}>
        <Form>
          <div
            style={{
              width: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <Input type='text' name='inputMessage' label='Enter Message' />
            <Button text='send' type='submit' />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/ban-types
type HomeType = {};
