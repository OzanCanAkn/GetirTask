import * as actionTypes from "../actions/actionTypes";

const itemTypeReducer = (state = "mug", actions) => {
  let newState;
  switch (actions.type) {
    case actionTypes.CHANGE_ITEM_TYPE:
      if (state === "mug") {
        return (newState = "shirt");
      } else if (state === "shirt") {
        return (newState = "mug");
      }
    default:
      return state;
  }
};

export default itemTypeReducer;
