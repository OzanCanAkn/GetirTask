import { combineReducers } from "redux";
import brandsReducer from "./brandsReducer";
import tagsReducer from "./tagsReducer";
import sortReducer from "./sortReducer";
import dataReducer from "./dataReducer";
import chartReducer from "./chartReducer";
const reducers = combineReducers({
  tagsReducer,
  brandsReducer,
  sortReducer,
  dataReducer,
  chartReducer,
});

export default reducers;
