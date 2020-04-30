import HomePage from '@pages/HomePage';
import NotFoundPage from '@pages/NotFoundPage';
import AboutPage from '@pages/AboutPage';
import App from './app';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...AboutPage,
        path: '/about'
      },
      {
        ...NotFoundPage
      }
    ]
  }
];
