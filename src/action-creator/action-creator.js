import getData from "../service";

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

  setCountries: (country) => ({
    type: `SET_COUNTRIES`,
    payload: country,
  })
};

export default ActionCreator;
