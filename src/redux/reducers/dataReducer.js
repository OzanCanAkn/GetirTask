import * as actionTypes from "../actions/actionTypes";

const dataReducer = (state = "empty", actions) => {
  switch (actions.type) {
    case actionTypes.SET_DATA:
      return ( actions?.data);
    default:
      return state;
  }
};

export default dataReducer;
