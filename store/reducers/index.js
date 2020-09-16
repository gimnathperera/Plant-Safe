import { combineReducers } from 'redux';

import user from './user';
import security from './security';

import { USER_SIGN_OUT } from '../actions/types';

const appReducer = combineReducers({
  user,
  security
});

const rootReducer = (state, action) => {
  if (action.type === USER_SIGN_OUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
