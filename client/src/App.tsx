import React from 'react';

import { useAuthContext } from './context/AuthContext';
import {
  useLoginLazyQuery,
  useMessageSentSubscription,
} from './graphql/generated/graphql';

export const App = () => {
  const [login] = useLoginLazyQuery();

  const { onSuccessAuth } = useAuthContext();

  const loginHandler = async () => {
    await login({
      variables: {
        data: {
          phone: '+1222',
          is_partner: true,
          code: 907477,
        },
      },
      onCompleted: (res) => {
        if (res.login.access_token) {
          onSuccessAuth(res.login.access_token);
        }
      },
    });
  };
  return (
    <div className='App'>
      <h1>Chat</h1>
      <button onClick={loginHandler}>Login</button>
      {/*{data ? (*/}
      {/*  <React.Fragment>*/}
      {/*    <p>{data?.messageSent.id}</p>*/}
      {/*    <p>{data?.messageSent.message}</p>*/}
      {/*    <p>{data?.messageSent.order_id}</p>*/}
      {/*    <p>{data?.messageSent.user.id}</p>*/}
      {/*    <p>{data?.messageSent.user.name}</p>*/}
      {/*  </React.Fragment>*/}
      {/*) : null}*/}
    </div>
  );
};
