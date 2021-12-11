import * as actionTypes from "../actions/actionTypes";

const tagsReducer = (state = { mug: [], shirt: [] ,checked:[]}, actions) => {
  switch (actions.type) {
    case actionTypes.SET_TAGS:
      return ( actions.list);
    case actionTypes.SET_CHECKED_TAGS:
      return ( {
        ...state,
        checked: actions.checked,
      });
    default:
      return state;
  }
};

export default tagsReducer;