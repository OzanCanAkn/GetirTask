import * as actionTypes from "../actions/actionTypes";

const findIndex = (list, item) => {
  list.array.forEach((element, index) => {
    if (element.slug === item.slug) {
      return index;
    }
  });
};

const chartReducer = (state = [], actions) => {
  let newState;
  switch (actions.type) {
    case actionTypes.ADD_ITEM:
      if (state.length > 0)
        return (newState = [...state, { ...actions.item, count: 1 }]);
      else return (newState = [{ ...actions.item, count: 1 }]);
    case actionTypes.INCREASE_ITEM_COUNT: {
      var index = findIndex(state, actions.item);
      if (index != -1) {
        state[index].count++;
        return (newState = state);
      }
      return (newState = state);
    }
    case actionTypes.DECREASE_ITEM_COUNT:
      var index = findIndex(state, actions.item);
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
