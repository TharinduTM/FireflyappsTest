import { FETCH_BUTTON_CLICK, REMOVE_CARD } from "./Types"



export const addCard = (data) => {
    return {
        type: FETCH_BUTTON_CLICK, //action eka gena wistharayak
        payload: data
    }
}

export const removeCard = (data) => {
    return {
        type: REMOVE_CARD, //action eka gena wistharayak
        payload: data
    }
}