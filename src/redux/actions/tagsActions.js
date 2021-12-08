import * as actionTypes from "./actionTypes";

export const setTags =(payload)=>({
    type:actionTypes.SET_TAGS,
    payload:payload
})
export const setCheckedTags =(payload)=>({
    type:actionTypes.SET_CHECKED_TAGS,
    payload:payload
})
