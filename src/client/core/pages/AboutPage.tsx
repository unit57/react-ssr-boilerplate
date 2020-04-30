import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAboutPage } from '@redux/actions';
import { pageFieldsSelector } from '@redux/selectors';
import BasePage from '@components/BasePage';

const AboutPage = () => {
  const dispatch = useDispatch();
  const page = useSelector(pageFieldsSelector);
  useEffect(() => {
    dispatch(fetchAboutPage());
  }, []);
  if (!page) return null;
  const { title, metaData } = page;
  return (
    <BasePage metaData={metaData}>
      <div>This is the {title}</div>
    </BasePage>
  );
};

function loadData(store: any): void {
  return store.dispatch(fetchAboutPage());
}

export default {
  loadData,
  component: AboutPage
};
