import * as actionTypes from "../actions/actionTypes";

const pageReducer = (state = { init: 1, total: 10 }, actions) => {
  let newJson = state;
  switch (actions.type) {
    case actionTypes.SET_INIT_PAGE:
      newJson.init = actions.init;
      return { ...newJson };
    case actionTypes.SET_TOTAL_PAGE:
      newJson.total = actions.total;
      return { ...newJson };
    default:
      return state;
  }
};

export default pageReducer;
