import axios from "axios"

import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { SET_PRODUCTS } from '../redux/actions/produtActions'

import ProductCard from './productCard'

const ProductList = () => {
    const products = useSelector((state) => state.allProducts.products)
    const dispatch = useDispatch()
    
    // AXIOS
    const fetchProducts = async() => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Err", err)
            })
            dispatch(SET_PRODUCTS(response.data))
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    
    console.log("Products", products)
    
    return (
        <div className="ui grid container">
            <ProductCard/>
        </div>
    )
}

export default ProductList
