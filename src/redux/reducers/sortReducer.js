import * as actionTypes from "../actions/actionTypes";

const sortReducer = (state = 0, actions) => {
  let newState;
  switch (actions.type) {
    case actionTypes.SET_SORT_TYPE:
      return (newState = actions.sortTypeIndex);
    default:
      return state;
  }
};

export default sortReducer;