import getData from "../service";

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

  setCountries: (country) => ({
    type: `SET_COUNTRIES`,
    payload: country,
  }),
};

export default ActionCreator;
