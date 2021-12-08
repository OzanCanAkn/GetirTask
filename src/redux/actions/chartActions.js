import * as actionTypes from "./actionTypes";

export const addItem =(payload)=>({
    type:actionTypes.ADD_ITEM,
    payload:payload
})
export const increaseCount =()=>({
    type:actionTypes.INCREASE_ITEM_COUNT,
    payload:1
})
export const decreaseCount =()=>({
    type:actionTypes.DECREASE_ITEM_COUNT,
    payload:1
})
