import * as actionTypes from "../actions/actionTypes"

const listIdReducer=(state=-1,actions)=>{
    let newState;
    switch (actions.type) {
        case actionTypes.SET_LIST_ID:
            return(newState=actions.value)
        default:
            return state;
    }
}

export default listIdReducer;