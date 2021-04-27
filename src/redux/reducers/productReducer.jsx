import { ProductActionTypes } from '../types/actionTypes'

const initialState = {
    products: [] 
}

export const prodcutReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ProductActionTypes.SET_PRODUCTS:
            return {
                ...state,
                products:payload 
            }
            default:
                return state
    }    
}

export const selectedProdcutReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case ProductActionTypes.SELECTED_PRODUCT:
            return {
                ...state,
                ...payload 
            };
        case ProductActionTypes.REMOVE_SELECTED_PRODUCT:
            return {};
            default:
                return state
    }    
}
