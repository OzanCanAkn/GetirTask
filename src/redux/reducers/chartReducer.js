import * as actionTypes from "../actions/actionTypes";

const findIndex = (chartItems, item) => {
  var i = -1;
  chartItems?.forEach((element, index) => {
    console.log(element.slug, item.slug);
    if (element.slug === item.slug) {
      i = index;
    }
  });
  return i;
};

const chartReducer = (state = [], actions) => {
  let newState;
  switch (actions.type) {
    case actionTypes.ADD_ITEM:
      if (state.length > 0)
        return (newState = [...state, { ...actions.item, count: 1 }]);
      else return (newState = [{ ...actions.item, count: 1 }]);
    case actionTypes.INCREASE_ITEM_COUNT: {
      let index = findIndex(state, actions.item);
      if (index != -1) {
        let arr = state;
        arr[index].count++;
        return [...arr];
      }
      return (newState = state);
    }
    case actionTypes.DECREASE_ITEM_COUNT:
      let index = findIndex(state, actions.item);
      if (index != -1) {
        let arr = state;
        if (arr[index].count === 1) {
          arr.splice(index, 1);
        } else arr[index].count--;

        return [...arr];
      }
      return (newState = state);
    default:
      return state;
  }
};

export default chartReducer;
