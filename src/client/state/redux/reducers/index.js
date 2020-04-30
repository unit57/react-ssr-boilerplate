import { combineReducers } from 'redux';
import userReducer from './users-reducer';
import authReducer from './auth-reducer';
import adminsReducer from './admins-reducer';
import pageReducer from './fetch-pages-reducers';

export default combineReducers({
  users: userReducer,
  auth: authReducer,
  admins: adminsReducer,
  page: pageReducer
});
