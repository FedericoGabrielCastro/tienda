import React from 'react'
import { useSelector } from 'react-redux'

const ProductCard = () => {
    const products = useSelector ((state) => state.allProducts.products)
    // const {id, title } = products[0]

    return (
        <div className="column">
            <div className="link">
                <div className="card">
                    <div className="div image">
                        <div className="content">
                            {/* <div className="header">{title }</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
