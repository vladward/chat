import './Navigation.css';

import React, { FC, ReactNode } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Button } from '../components';
import { PATHS, routes } from '../constants';
import { useAuthContext } from '../context';

const RouterWrapper: FC<RouteWrapperType> = ({ isAuthRequired, children }) => {
  const { isAuth, onLogout } = useAuthContext();

  if (isAuthRequired && !isAuth) {
    return <Navigate replace to={PATHS.registration} />;
  } else if (!isAuthRequired && isAuth) {
    return <Navigate replace to={PATHS.home} />;
  }
  return (
    <div className='wrapper'>
      <div className='content'>
        {isAuthRequired && <Button onClick={onLogout} text='Logout' />}
        {children}
      </div>
    </div>
  );
};

export const Navigation = () => {
  return (
    <Routes>
      {routes.map((route, index) => {
        const { component: Component, path, auth } = route;
        return (
          <Route
            key={route.path + index}
            path={path}
            element={
              <RouterWrapper isAuthRequired={auth}>
                <Component />
              </RouterWrapper>
            }
          />
        );
      })}
      <Route path={'*'} element={<Navigate replace to={PATHS.home} />} />
    </Routes>
  );
};

type RouteWrapperType = {
  isAuthRequired: boolean;
  children: ReactNode;
};
