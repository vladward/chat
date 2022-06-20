import './RequestHandler.css';

import React, { FC } from 'react';

import { Preloader, PreloaderTypeProps } from '../preloader/Preloader';

type RequestHandlerPropsType = {
  loading?: boolean;
  backgroundLoading?: boolean;
  error?: any;
  children: JSX.Element;
};

export const RequestHandler: FC<RequestHandlerPropsType & PreloaderTypeProps> = ({
  loading,
  backgroundLoading,
  color: preloaderColor,
  size: preloaderSize,
  error,
  children,
}) => {
  if (loading) {
    return <Preloader color={preloaderColor} size={preloaderSize} />;
  }
  if (backgroundLoading) {
    return (
      <>
        <div className={'background__loading'} />
        <Preloader fullScreen color={preloaderColor} size={preloaderSize} />
        <>{children}</>
      </>
    );
  }
  if (error) {
    return <h1>{error.message}</h1>;
  }
  return <>{children}</>;
};
