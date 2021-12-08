import * as actionTypes from "../actions/actionTypes";

const brandsReducer = (state = { mug: [], shirt: [] }, actions) => {
  let newState;
  switch (actions.type) {
    case actionTypes.SET_BRANDS:
      return (newState = actions.list);
    case actionTypes.SET_CHECKED_BRANDS:
      return (newState = {
        ...state,
        checked: actions.checked,
      });
    default:
      return state;
  }
};

export default brandsReducer;
