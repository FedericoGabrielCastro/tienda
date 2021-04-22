import { combineReducers } from 'redux'

import { prodcutReducer } from './productReducer'

const reducers = combineReducers ({
    allProducts: prodcutReducer
})

export default reducers