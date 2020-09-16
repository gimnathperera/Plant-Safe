import { USER_SIGN_UP } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case USER_SIGN_UP:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
