import { FETCH_ABOUT_PAGE } from '../types';

const initialState = {
  page: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ABOUT_PAGE:
      return action.payload;
    default:
      return state;
  }
};
