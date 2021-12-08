import * as actionTypes from "../actions/actionTypes";

const chartReducer = (state = [], actions) => {
  let newState;
  switch (actions.type) {
    case actionTypes.ADD_ITEM:
      return (newState = state.push({ ...actions.item, count: 1 }));
    case actionTypes.INCREASE_ITEM_COUNT: {
      var index = state.indexOf(actions.item);
      if (index != -1) {
        state[index].count++;
        return (newState = state);
      }
      return (newState = state);
    }
    case actionTypes.DECREASE_ITEM_COUNT:
        var index = state.indexOf(actions.item);
        if (index != -1) {
          state[index].count--;
          return (newState = state);
        }
        return (newState = state);
    default:
      return state;
  }
};

export default chartReducer;
