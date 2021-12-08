import * as actionTypes from "../actions/actionTypes";

const dataReducer = (state = [], actions) => {
  let newState;
  switch (actions.type) {
    case actionTypes.SET_DATA:
      return (newState = actions?.data);
    default:
      return state;
  }
};

export default dataReducer;
