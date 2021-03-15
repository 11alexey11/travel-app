import { getData, getLogin, sendRegistration } from "../service";

const ActionCreator = {
  changeLanguage: (language) => ({
    type: `CHANGE_LANGUAGE`,
    payload: language,
  }),
  
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
    });
  },

  getLogin: (user, isLogin) => (dispatch) => {
    getLogin(user)
      .then((data) => {
        localStorage.user = JSON.stringify({
          email: data.user.email,
          name: data.user.name,
        });

        dispatch({
          type: `SET_USER_NAME`,
          payload: data.user.name
        })

        dispatch({
          type: `GET_LOGIN`,
          payload: data
        });

        dispatch({
          type: `CHANGE_IS_LOGIN`,
          payload: isLogin
        })
      })
  },

  sendRegistration: (user, isLogin) => (dispatch) => {
    sendRegistration(user)
      .then((data) => {
        console.log(data);
        localStorage.user = JSON.stringify({
          email: data.email,
          name: data.name,
        });

        dispatch({
          type: `SET_USER_NAME`,
          payload: data.name
        })

        dispatch({
          type: `SEND_REGISTRATION`,
          payload: data
        });

        dispatch({
          type: `CHANGE_IS_LOGIN`,
          payload: isLogin
        })
      })
  },

  setCountries: (country) => ({
    type: `SET_COUNTRIES`,
    payload: country,
  }),

  changeIsLogin: (isLogin) => ({
    type: `CHANGE_IS_LOGIN`,
    payload: isLogin
  }),

  changeSignIn: (isSignIn) => ({
    type: `CHANGE_IS_SIGN_IN`,
    payload: isSignIn
  }),

  setUserName: (userName) => ({
    type: `SET_USER_NAME`,
    payload: userName
  }),
};

export default ActionCreator;
