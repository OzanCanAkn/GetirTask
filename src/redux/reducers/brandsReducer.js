import * as actionTypes from "../actions/actionTypes";

const brandsReducer = (state = { mug: [], shirt: [] }, actions) => {
  switch (actions.type) {
    case actionTypes.SET_BRANDS:
      return (actions.list);
    case actionTypes.SET_CHECKED_BRANDS:
      return ( {
        ...state,
        checked: actions.checked,
      });
    default:
      return state;
  }
};

export default brandsReducer;
