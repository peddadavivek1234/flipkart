import { Component } from "react";
import Cookies from "js-cookie";

import AllProductsContent from "../allProductsContent/AllProductsContent";

class AllProducts extends Component {
    state = {
        productList: [],
        isLoading: false,
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts = async () => {
        this.setState({
            isLoading: true,
        })

        const jwtToken = Cookies.get('jwt_token')
        const apiUrl = 'http://localhost:3000/products'
        const options = {
            headers: {
                Authorization: `Bearer ${jwtToken}`,
            },
            method: 'GET',
        }

        const response = await fetch(apiUrl,options)
        if (response.ok) {
            const fetchedData = await response.json()
            const updatedData = fetchedData.products.map(product => ({
                name: product.name,
                id: product.id,
                latestPrice: product.latestPrice,
                ratings: product.ratings,
                reviews: product.reviews,
            }))
            this.setState({
                productList: updatedData,
                isLoading: false,
            })
        }
    }

    renderProductsList = () => {
        const {productList} = this.state
        return (
            <>
                <h1>All Products</h1>
                <ul>
                    {productList.map(product => (
                        <AllProductsContent productData={product} key={product.id}/>
                    ))}
                </ul>
            </>
        )
    }

    renderLoader = () => (
        <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    )

    render() {
        const {isLoading} = this.state
        return isLoading ? this.renderLoader() : this.renderProductsList()
    }
}

export default AllProducts