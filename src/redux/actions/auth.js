import { Storage, STORAGE_KEYS } from '@utils/storage';
import ACTION_TYPES from '../actionTypes';

// ** Handle User Login
export const loginAC = (data) => (dispatch) => {
  // ** Add to user, accessToken & refreshToken to localStorage
  Storage.setItem(STORAGE_KEYS.userData, data.user);
  Storage.setItem(STORAGE_KEYS.token, data.token);

  dispatch({
    type: ACTION_TYPES.LOGIN,
    data
  });
};

/**
 * Handle User Logout
 * @param {boolean} isSessionExpired
 */
export const logoutAC = () => (dispatch) => {
  // ** Remove user, accessToken & refreshToken from localStorage
  Storage.clear(STORAGE_KEYS.userData);
  Storage.clear(STORAGE_KEYS.token);

  dispatch({ type: ACTION_TYPES.LOGOUT });
};
