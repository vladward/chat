import React, { useEffect } from 'react';

import { Preloader } from '../components/preloader/Preloader';
import {
  Status,
  useGetCurrentUserLazyQuery,
  useGetCurrentUserQuery,
  UserPayMethod,
} from '../graphql/generated/graphql';

type Props = {
  children: React.ReactNode;
};

export type currentUserDataTypeProps = {
  __typename?: 'User';
  id: string;
  phone_number: number;
  name: string;
  image: string;
  notification: boolean;
  position: boolean;
  is_new: boolean;
  orders: Array<{
    __typename?: 'InstitutionOrder';
    id: string;
    institution_id: string;
    status: Status;
    rating: number;
    delivery: number;
    latitude: string;
    longitude: string;
    // messages: {
    //   __typename?: 'Message';
    //   id: string;
    //   order_id: string;
    //   user: { __typename?: 'userPage'; id: string; name: string };
    // };
  }>;
  pay_methods: Array<{ __typename?: 'UserPay'; method: UserPayMethod }>;
  institution: {
    __typename?: 'Institution';
    id: string;
    name: string;
    work_from: string;
    work_to: string;
    address: string;
    free_delivery: number;
    dishes?: Array<{
      __typename?: 'Dish';
      id: string;
      name: string;
      price: number;
    }> | null;
    fillings: Array<{
      __typename?: 'Filling';
      id: string;
      name: string;
      price: number;
      weight: number;
    }>;
  };
};

type ContextProps = {
  currentUserData?: currentUserDataTypeProps | null;
  refetch: () => void;
  isAuth: boolean;
  onSuccessAuth: (token: string) => void;
  onLogout: () => void;
  loading: boolean;
};

export const AuthContext = React.createContext<ContextProps>({
  currentUserData: undefined,
  refetch: () => {},
  isAuth: false,
  onSuccessAuth: () => {},
  onLogout: () => {},
  loading: false,
});

export function useAuthContext() {
  const authContext = React.useContext(AuthContext);

  if (!authContext) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return authContext;
}

export const actionTypes = {
  SUCCESS_AUTH: 'SUCCESS_AUTH',
  LOGOUT: 'LOGOUT',
  INIT: 'INIT',
} as const;

export const AuthProvider = ({ children }: Props) => {
  const { data, loading, refetch, client } = useGetCurrentUserQuery();

  const [state, dispatch] = React.useReducer(authReducer, {
    isAuth: false,
    isInit: false,
  });

  useEffect(() => {
    if (!loading) {
      if (data?.getCurrentUser) {
        dispatch({ type: actionTypes.SUCCESS_AUTH });
      } else {
        dispatch({ type: actionTypes.INIT });
      }
    }
  }, [data, loading]);

  const handleSuccessAuth = (token: string) => {
    localStorage.setItem('token', token);
    client.resetStore().then(() => dispatch({ type: actionTypes.SUCCESS_AUTH }));
  };

  const handleLogout = () => {
    client.clearStore().then(() => {
      localStorage.removeItem('token');
      dispatch({ type: actionTypes.LOGOUT });
    });
  };

  const value = {
    currentUserData: data?.getCurrentUser,
    refetch,
    loading,
    isAuth: state.isAuth,
    onSuccessAuth: handleSuccessAuth,
    onLogout: handleLogout,
  };

  if (!state.isInit) {
    return <Preloader fullScreen color='lightBlue' size={'m'} />;
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

type AuthStateType = {
  isAuth: boolean;
  isInit: boolean;
};

type ActionType = { type: 'SUCCESS_AUTH' } | { type: 'LOGOUT' } | { type: 'INIT' };

function authReducer(state: AuthStateType, action: ActionType) {
  switch (action.type) {
    case actionTypes.INIT: {
      return { ...state, isInit: true };
    }
    case actionTypes.LOGOUT: {
      return {
        ...state,
        isAuth: false,
      };
    }
    case actionTypes.SUCCESS_AUTH: {
      return {
        ...state,
        isAuth: true,
        isInit: true,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
}
