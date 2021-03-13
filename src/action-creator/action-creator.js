const ActionCreator = {
  findCountry: (query) => ({
    type: `FIND_COUNTRY`,
    payload: query,
  }),

  getData: (getData) => (dispatch) => {
    getData().then((data) => {
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
