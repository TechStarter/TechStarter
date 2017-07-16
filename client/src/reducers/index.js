import userReducer from './userReducer';
import projectReducer from './projectReducer';
import newProjectReducer from './newProjectReducer';
import formReducer from './formReducer';
import { combineReducers } from 'redux';

export default combineReducers({
  user: userReducer,
  projects: projectReducer,
  projectCreation: newProjectReducer,
  formControl: formReducer
});
