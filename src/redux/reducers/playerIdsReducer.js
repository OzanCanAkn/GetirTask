import * as actionTypes from "../actions/actionTypes"

const playerIdsReducer=(state={},actions)=>{
    let newState;
    switch (actions.type) {
        case actionTypes.SET_PLAYER_IDS:
            return(newState=actions.json)
        default:
            return state;
    }
}

export default playerIdsReducer;