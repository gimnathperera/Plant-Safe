import axios from 'axios';
import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import { USER_SIGN_UP, USER_SIGN_OUT, SET_CURRENT_USER } from './types';

const BASE_URL = 'http://192.168.1.4:5000/';

export const userSignUp = (newUser) => async (dispatch) => {
  try {
    const response = await axios.post(`${BASE_URL}/api/users`, newUser);
    dispatch({ type: USER_SIGN_UP, payload: response.data });
  } catch (err) {
    console.log(err.message);
    alert('Server error');
  }
};

export const userSignIn = (credentials) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/users/login`,
      credentials
    );

    let user = _.omit(response.data[0], ['password']);

    if (response.data.message) {
      alert('Invalid Credentials');
    } else {
      let uid = user.id;
      let email = user.email;
      await AsyncStorage.setItem('id', uid.toString());
      await AsyncStorage.setItem('email', email);
      dispatch({ type: SET_CURRENT_USER, payload: user });
    }
  } catch (err) {
    console.log(err);
    alert('Invalid Credentials');
  }
};

export const userSignOut = () => async (dispatch) => {
  try {
    await AsyncStorage.clear();

    dispatch({ type: USER_SIGN_OUT });
  } catch (err) {
    console.log(err.message);
  }
};
