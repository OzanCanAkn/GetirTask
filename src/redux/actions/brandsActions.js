import * as actionTypes from "./actionTypes";

export const setBrands =(payload)=>({
    type:actionTypes.SET_BRANDS,
    payload:payload
})
export const setCheckedBrands =(payload)=>({
    type:actionTypes.SET_CHECKED_BRANDS,
    payload:payload
})
