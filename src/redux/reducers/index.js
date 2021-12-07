import {combineReducers} from "redux"
import listIdReducer from "./listIdReducer"
import playerIdsReducer from "./playerIdsReducer"
const reducers= combineReducers({
    listIdReducer,
    playerIdsReducer
})

export default reducers;