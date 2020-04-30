import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from '@components/Header';
import { fetchCurrentUser } from '@redux/actions';
import './app.scss';

const App = ({ route }) => {
  return (
    <div>
      <Header />
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};
