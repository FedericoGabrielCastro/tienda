import { ProductActionTypes } from '../types/actionTypes'

export const SET_PRODUCTS = (product) => {
    return {
        type: ProductActionTypes.SET_PRODUCTS,
        payload: product,
    }
}

export const SELECTED_PRODUCT = (product) => {
    return {
        type: ProductActionTypes.SELECTED_PRODUCT,
        payload: product,
    }
}

export const REMOVE_SELECTED_PRODUCT = (product) => {
    return {
        type: ProductActionTypes.REMOVE_SELECTED_PRODUCT,
        payload: product,
    }
}