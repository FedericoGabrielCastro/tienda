import { combineReducers } from 'redux'

import { prodcutReducer, selectedProdcutReducer } from './productReducer'

const reducers = combineReducers ({
    allProducts: prodcutReducer,
    product: selectedProdcutReducer
})

export default reducers