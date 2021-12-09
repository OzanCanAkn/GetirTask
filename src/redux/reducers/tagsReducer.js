import * as actionTypes from "../actions/actionTypes";

const tagsReducer = (state = { mug: [], shirt: [] ,checked:[]}, actions) => {
  let newState;
  switch (actions.type) {
    case actionTypes.SET_TAGS:
      return (newState = actions.list);
    case actionTypes.SET_CHECKED_TAGS:
      return (newState = {
        ...state,
        checked: actions.checked,
      });
    default:
      return state;
  }
};

export default tagsReducer;