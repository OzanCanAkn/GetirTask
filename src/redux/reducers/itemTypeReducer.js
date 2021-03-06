import * as actionTypes from "../actions/actionTypes";

const itemTypeReducer = (state = "mug", actions) => {
  switch (actions.type) {
    case actionTypes.CHANGE_ITEM_TYPE:
      if (state === "mug") {
        return "shirt";
      } else if (state === "shirt") {
        return "mug";
      }
      break;
    default:
      return state;
  }
};

export default itemTypeReducer;
