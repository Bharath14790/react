import './orders.css'
import { Header } from '../component/header';
import axios from 'axios';
import { Fragment, useEffect, useState } from "react"
import { formatMoney } from '../utils/money';
import dayjs from 'dayjs'
export function Orders({ cart }) {
    const [orders, setorders] = useState([])
    useEffect(() => {
        axios.get('/api/orders?expand=products')
            .then((response) => {
                setorders(response.data)
            })
    }, [])

    return (
        <>
            <title>orders</title>
            <Header cart={cart} />

            <div className="orders-page">
                <div className="page-title">Your Orders</div>

                <div className="orders-grid">
                    {orders.map((order) => {
                        return (
                            <div key={order.id} className="order-container">

                                <div className="order-header">
                                    <div className="order-header-left-section">
                                        <div className="order-date">
                                            <div className="order-header-label">Order Placed:</div>
                                            <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                                        </div>
                                        <div className="order-total">
                                            <div className="order-header-label">Total:</div>
                                            <div>{formatMoney(order.totalCostCents)}</div>
                                        </div>
                                    </div>

                                    <div className="order-header-right-section">
                                        <div className="order-header-label">Order ID:</div>
                                        <div>{order.id}</div>
                                    </div>
                                </div>

                                <div className="order-details-grid">
                                    {order.products.map((orderproduct) => {
                                        return (
                                            <Fragment key={orderproduct.product.id}>
                                                <div className="product-image-container">
                                                    <img src={orderproduct.product.image} />
                                                </div>
                                                <div className="product-details">
                                                    <div className="product-name">
                                                        {orderproduct.product.name}
                                                    </div>
                                                    <div className="product-delivery-date">
                                                        Arriving on: {dayjs(orderproduct.estimatedDeliveryTimeMs).format("MMMM D")}
                                                    </div>
                                                    <div className="product-quantity">
                                                        Quantity: {orderproduct.quantity}
                                                    </div>
                                                    <button className="buy-again-button button-primary">
                                                        <img className="buy-again-icon" src="images/icons/buy-again.png" />
                                                        <span className="buy-again-message">Add to Cart</span>
                                                    </button>
                                                </div>

                                                <div className="product-actions">
                                                    <a href="/track">
                                                        <button className="track-package-button button-secondary">
                                                            Track package
                                                        </button>
                                                    </a>
                                                </div>
                                            </Fragment>
                                        )
                                        }
                                    )}
                                    

                                    
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
        </>
    )
}