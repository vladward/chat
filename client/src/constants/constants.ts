export const WS_HOST: string = process.env.REACT_APP_WS_HOST as string;
export const API_HOST: string = process.env.REACT_APP_API_HOST as string;
export const BASE_URL: string = process.env.REACT_APP_BASE_URL as string;

export const PATHS: PathsType = {
  login: '/login',
  registration: '/registration',
  home: '/home',
  user: '/user',
};

export const PreloaderSizes = {
  s: '25px',
  m: '60px',
  l: '100px',
};

type PathsType = {
  [key: string]: string;
};
