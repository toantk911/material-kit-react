import { Storage, STORAGE_KEYS } from '@utils/storage';
import ACTION_TYPES from '../actionTypes';

// **  Initial State
const initialState = {
  isUserLoggedIn: !!Storage.getItem(STORAGE_KEYS.userData) && !!Storage.getItem(STORAGE_KEYS.token),
  user: Storage.getItem(STORAGE_KEYS.userData)
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.LOGIN:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.data.user
      };
    case ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: null
      };
    default:
      return state;
  }
};

export default authReducer;
