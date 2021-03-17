import { getData, getLogin, getRating, sendRegistration } from "../service";

const ActionCreator = {
  changeLanguage: (language) => {
    localStorage.travelAppLang = JSON.stringify(language);

    return {
      type: `CHANGE_LANGUAGE`,
      payload: language,
    };
  },

  findCountry: (query) => ({
    type: `FIND_COUNTRY`,
    payload: query,
  }),

  getData: (lang) => (dispatch) => {
    getData(lang).then((data) => {
      dispatch({
        type: `GET_DATA`,
        payload: data,
      });

      dispatch({
        type: `SET_COUNTRIES`,
        payload: data,
      });

      dispatch({
        type: `CHANGE_LANGUAGE`,
        payload: lang,
      });
    });
  },

  getLogin: (user, isLogin) => (dispatch) => {
    getLogin(user).then((data) => {
      if (data.user) {
        localStorage.user = JSON.stringify({
          email: data.user.email,
          name: data.user.name,
          password: data.user.password
        });

        dispatch({
          type: `SET_USER_NAME`,
          payload: data.user.name,
        });

        dispatch({
          type: `GET_LOGIN`,
          payload: data,
        });

        dispatch({
          type: `CHANGE_IS_LOGIN`,
          payload: isLogin,
        });

        dispatch({
          type: `SET_ERROR`,
          payload: "Success",
        });
      } else {
        dispatch({
          type: `SET_ERROR`,
          payload: "Not found",
        });
      }
    });
  },

  sendRegistration: (user, isLogin) => (dispatch) => {
    sendRegistration(user).then((data) => {
      if (data.name) {
        localStorage.user = JSON.stringify({
          email: data.email,
          name: data.name,
          password: data.password
        });
  
        dispatch({
          type: `SET_USER_NAME`,
          payload: data.name,
        });
  
        dispatch({
          type: `SEND_REGISTRATION`,
          payload: data,
        });
  
        dispatch({
          type: `CHANGE_IS_LOGIN`,
          payload: isLogin,
        });
  
        dispatch({
          type: `SET_ERROR`,
          payload: "Success",
        });
      } else {
        dispatch({
          type: `SET_ERROR`,
          payload: "Exist",
        });
      }
    });
  },

  setCountries: (country) => ({
    type: `SET_COUNTRIES`,
    payload: country,
  }),

  changeIsLogin: (isLogin) => ({
    type: `CHANGE_IS_LOGIN`,
    payload: isLogin,
  }),

  changeSignIn: (isSignIn) => ({
    type: `CHANGE_IS_SIGN_IN`,
    payload: isSignIn,
  }),

  setUserName: (userName) => ({
    type: `SET_USER_NAME`,
    payload: userName,
  }),

  setError: (error) => ({
    type: `SET_ERROR`,
    payload: error,
  }),

  getRating: () => (dispatch) => {
    getRating().then((data) => {
      dispatch({
        type: `GET_RATING`,
        payload: data,
      });
    });
  },
};

export default ActionCreator;
