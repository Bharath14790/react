import './checkout-header.css'
import './checkout.css'
import { useState, useEffect } from 'react'
import axios from 'axios';
import dayjs from 'dayjs';
import { formatMoney } from '../utils/money';

export function Checkout({ cart, loadcart }) {
    const [deliveryoption, setdeliveryoption] = useState([])
    const [paymentsummary, setpaymentsummary] = useState(null)
    useEffect(() => {
        const fetchcheckoutdata = async () => {
        let response = await  axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
             setdeliveryoption(response.data)
        
         response =  await axios.get("/api/payment-summary")
                setpaymentsummary(response.data)
        }
        fetchcheckoutdata()
    }, [cart])

    return (
        <>
            <title>Checkout</title>
            <div className="checkout-header">
                <div className="header-content">
                    <div className="checkout-header-left-section">
                        <a href="/">
                            <img className="logo" src="images/logo.png" />
                            <img className="mobile-logo" src="images/mobile-logo.png" />
                        </a>
                    </div>

                    <div className="checkout-header-middle-section">
                        Checkout (<a className="return-to-home-link"
                            href="/">3 items</a>)
                    </div>

                    <div className="checkout-header-right-section">
                        <img src="images/icons/checkout-lock-icon.png" />
                    </div>
                </div>
            </div>

            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <div className="order-summary">

                        {deliveryoption.length > 0 && cart.map((cartitem) => {
                            const selecteddeliveryoption = deliveryoption
                                .find((deliveryOption) => {
                                    return deliveryOption.id === cartitem.deliveryOptionId
                                })
                                const deletecartitem = async() => {
                                   await  axios.delete(`/api/cart-items/${cartitem.productId}`)
                                   await loadcart()
                                }
                                

                            return (
                                <div key={cartitem.productId} className="cart-item-container">
                                    <div className="delivery-date">
                                        Delivery date:{dayjs(selecteddeliveryoption.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}

                                    </div>

                                    <div className="cart-item-details-grid">
                                        <img className="product-image"
                                            src={cartitem.product.image} />

                                        <div className="cart-item-details">
                                            <div className="product-name">
                                                {cartitem.product.name}
                                            </div>
                                            <div className="product-price">
                                                {formatMoney(cartitem.product.priceCents)}
                                            </div>
                                            <div className="product-quantity">
                                                <span>
                                                    Quantity: <span className="quantity-label">{cartitem.quantity}</span>
                                                </span>
                                                <span className="update-quantity-link link-primary" >
                                                    Update
                                                </span>
                                                <span className="delete-quantity-link link-primary" onClick={deletecartitem}>
                                                    Delete
                                                </span>
                                            </div>
                                        </div>

                                        <div className="delivery-options">
                                            <div className="delivery-options-title">
                                                Choose a delivery option:
                                            </div>
                                            {deliveryoption.map((deliveryOptions) => {
                                                let pricestring = "FREE Shipping"
                                                if (deliveryOptions.priceCents > 0) {
                                                    pricestring = `${formatMoney(deliveryOptions.priceCents)} - Shipping`
                                                }
                                                const updatedeliveryoption = async () => {
                                                    await axios.put(`/api/cart-items/${cartitem.productId}`, { deliveryOptionId: deliveryOptions.id })
                                                    await loadcart()
                                                }
                                                return (
                                                    <div key={deliveryOptions.id} className="delivery-option" onClick={updatedeliveryoption}>
                                                        <input
                                                            type="radio"
                                                            checked={deliveryOptions.id === cartitem.deliveryOptionId}
                                                            onChange={() => {}}
                                                            className="delivery-option-input"
                                                            name={`delivery-option-${cartitem.productId}`}
                                                        />
                                                        <div>
                                                            <div className="delivery-option-date">
                                                                {dayjs(deliveryOptions.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
                                                            </div>
                                                            <div className="delivery-option-price">
                                                                {pricestring}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>
                                    </div>
                                </div>
                            )
                        })}


                    </div>

                    <div className="payment-summary">
                        <div className="payment-summary-title">
                            Payment Summary
                        </div>
                        {paymentsummary && (

                            <>
                                <div className="payment-summary-row">
                                    <div>({paymentsummary.totalItems}):</div>
                                    <div className="payment-summary-money">
                                        {formatMoney(paymentsummary.productCostCents)}
                                    </div>
                                </div>

                                <div className="payment-summary-row">
                                    <div>Shipping &amp; handling:</div>
                                    <div className="payment-summary-money">
                                        {formatMoney(paymentsummary.shippingCostCents)}
                                    </div>
                                </div>

                                <div className="payment-summary-row subtotal-row">
                                    <div>Total before tax:</div>
                                    <div className="payment-summary-money">
                                        {formatMoney(paymentsummary.totalCostBeforeTaxCents)}
                                    </div>
                                </div>

                                <div className="payment-summary-row">
                                    <div>Estimated tax (10%):</div>
                                    <div className="payment-summary-money">
                                        {formatMoney(paymentsummary.taxCents)}
                                    </div>
                                </div>

                                <div className="payment-summary-row total-row">
                                    <div>Order total:</div>
                                    <div className="payment-summary-money">
                                        {formatMoney(paymentsummary.totalCostCents)}
                                    </div>
                                </div>

                                <button className="place-order-button button-primary">
                                    Place your order
                                </button>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}