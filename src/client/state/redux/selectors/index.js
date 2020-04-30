import { createSelector } from 'reselect';

export const pageSelector = ({ page }) => page;

export const pageFieldsSelector = createSelector(
  pageSelector,
  page => page.items && page.items[0].fields
);
