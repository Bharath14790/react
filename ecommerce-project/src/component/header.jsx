import './header.css';
import { Link } from 'react-router-dom';
export function Header( {cart} ){
    let totalquantity = 0
    cart.forEach((cartitem) =>{
        totalquantity += cartitem.quantity
    })
    return(
        <>
        <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-Link">
                        <img className="logo"
                            src="images/logo-white.png" />
                        <img className="mobile-logo"
                            src="images/mobile-logo-white.png" />
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search" />

                    <button className="search-button">
                        <img className="search-icon" src="images/icons/search-icon.png" />
                    </button>
                </div>

                <div className="right-section">
                    <Link className="orders-Link header-Link" to="/order">

                        <span className="orders-text">Orders</span>
                    </Link>

                    <Link className="cart-Link header-Link" to="/checkout">
                        <img className="cart-icon" src="images/icons/cart-icon.png" />
                        <div className="cart-quantity">{totalquantity}</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>
            
        </>
    )
}