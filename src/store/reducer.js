const initialState = {
  accessToken: '',
  user: {
    userId: '',
    role: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    socialHandles: {},
  },
};

// action types
const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
const SET_USER_DETAILS = 'SET_USER_DETAILS';
const SET_LOGOUT = 'SET_LOGOUT';

// action creators
export const setAccessTokenAction = (token) => ({
  type: SET_ACCESS_TOKEN,
  payload: token,
});

export const setUserDetailsAction = (details) => ({
  type: SET_USER_DETAILS,
  payload: details,
});

export const setLogOut = () => ({
  type: SET_LOGOUT,
  payload: null,
});

const rootReducer = (state = initialState, action) => {
  // https://redux.js.org/tutorials/fundamentals/part-3-state-actions-reducers
  switch (action.type) {
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload,
      };
    case SET_USER_DETAILS:
      return {
        ...state,
        user: action.payload,
      };
    case SET_LOGOUT:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

// export getter and setter methods
export const getAccessToken = (state) => state.auth.accessToken;
export const getUserDetails = (state) => state.auth.user;

export const setAccessToken = (state, token) => ({
  ...state,
  auth: {
    ...state.auth,
    accessToken: token,
  },
});

export const setUserDetails = (state, details) => ({
  ...state,
  auth: {
    ...state.auth,
    userDetails: details,
  },
});

export default rootReducer;

