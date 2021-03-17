const initialState = {
  data: [],
  countries: [],
  isLogin: false,
  isSignIn: false,
  user: {},
  userName: '',
  language: null,
  errorType: '',
  ratings: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_LANGUAGE`:
      return {
        ...state,
        language: action.payload,
      };
    case `GET_DATA`:
      return {
        ...state,
        data: action.payload,
      };
    case `GET_LOGIN`: {
      const { user } = action.payload
      return {
        ...state,
        user,
      }
    }
    case `SEND_REGISTRATION`: {
      const { user } = action.payload
      return {
        ...state,
        user,
      }
    }
    case `SET_COUNTRIES`:
      return {
        ...state,
        countries: action.payload,
      };
    case `FIND_COUNTRY`:
      const filtredCoutries = state.data.filter(
        (country) =>
          country.capital
            .toLowerCase()
            .includes(action.payload.toLowerCase()) ||
          country.country.toLowerCase().includes(action.payload.toLowerCase())
      );

      return {
        ...state,
        countries: filtredCoutries,
      };
    case `CHANGE_IS_LOGIN`:
      return {
        ...state,
        isLogin: action.payload
      }
    case `CHANGE_IS_SIGN_IN`:
      return {
        ...state,
        isSignIn: action.payload
      }
    case `SET_USER_NAME`:
      return {
        ...state,
        userName: action.payload
      }
    case `SET_ERROR`:
      return {
        ...state,
        errorType: action.payload
      }
    case `GET_RATING`:
      return {
        ...state,
        ratings: action.payload
      }
    case `SET_USER_DEFAULT`:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state;
  }
};

export default reducer;
