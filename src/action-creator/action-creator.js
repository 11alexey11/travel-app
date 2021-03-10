const ActionCreator = {
  getData: (getData) => (dispatch) => {
    getData().then((data) => {
      dispatch({
        type: `GET_DATA`,
        payload: data,
      });
    });
  },
};

export default ActionCreator;
