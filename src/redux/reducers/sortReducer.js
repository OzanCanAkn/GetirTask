import * as actionTypes from "../actions/actionTypes";

const sortReducer = (state = -1, actions) => {
  switch (actions.type) {
    case actionTypes.SET_SORT_TYPE:
      return (actions.sortTypeIndex);
    default:
      return state;
  }
};

export default sortReducer;