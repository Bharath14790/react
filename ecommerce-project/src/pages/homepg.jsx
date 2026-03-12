import axios from 'axios';
import { useEffect, useState } from "react"
import './home.css'
import { Header } from '../component/header'
import {Product} from './product'

export function Homepage({cart, loadcart}) {
    const [products, setproducts] = useState([])
    
    
    useEffect(() =>{
        axios.get('/api/products')
        .then((response) => {
            setproducts(response.data)
        })
    }, [])
    
    return (
        <>
            <Header cart = {cart}/>
            <div className="home-page">
                <div className="products-grid">
                    {products.map((product) => {
                        return (
                            <Product key = {product.id} loadcart = {loadcart} product = {product} />
                        )
                    })}

                </div>
            </div>
        </>
    )
}