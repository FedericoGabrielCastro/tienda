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
