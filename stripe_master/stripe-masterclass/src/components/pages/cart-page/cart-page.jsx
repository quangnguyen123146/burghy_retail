import React , {useContext}from "react";
import {CartContext} from '../../../context/cart-context'
import Layout from '../../../shared/layout'
import CartItem from './cart-items'
import './cart-page.style.scss'
import Total from "./total";
const CartPage = () => {
    const {cartItems , itemCount, total, removeProduct, clearCart } = useContext(CartContext);
/*     const funcs = {increase, decrease, removeProduct}
 */    return (
        <Layout>
            <div>
                <h1>Cart</h1>
                {
                    cartItems.length === 0 ? <div className="empty-cart">Your Cart is Empty</div>
                    :
                    <div>
                        <div className="cart-page">
                            <div className="cart-item-container">
                                {
                                    cartItems.map(item => 
                                        <CartItem {...item} key={item.id}
                                        removeProduct = {removeProduct}
                                        />)
                                }
                            </div>
                            <Total itemCount={itemCount} total = {total}
                            removeProduct ={removeProduct} clearCart = {clearCart}/>
                        </div>
                        
                    </div>
                    
                }
            </div>
        </Layout>
    )
}

export default CartPage