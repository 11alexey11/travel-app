const initialState = {
  data: [],
  countries: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `GET_DATA`:
      return {
        ...state,
        data: action.payload,
      };
    case `SET_COUNTRIES`:
      return {
        ...state,
        countries: action.payload,
      };
    case `FIND_COUNTRY`:
      const filtredCoutries = state.data.filter((country) =>
        country.capital.toLowerCase().includes(action.payload.toLowerCase()) ||
        country.country.toLowerCase().includes(action.payload.toLowerCase()));

        return {
        ...state,
        countries: filtredCoutries,
      };
    default:
      return state;
  }
};

export default reducer;
