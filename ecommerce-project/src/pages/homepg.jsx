import axios from 'axios';
import { useEffect, useState } from "react"
import './home.css'
import { Header } from '../component/header'
import {Product} from './product'

export function Homepage({cart, loadcart}) {
    const [products, setproducts] = useState([])
    
    
    useEffect(() =>{
        const fetchproduct  = async() => {
            let response  = await axios.get('/api/products')
              setproducts(response.data)
        }
         fetchproduct()
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