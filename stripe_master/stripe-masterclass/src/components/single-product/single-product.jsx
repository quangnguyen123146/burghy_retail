import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/products-context'
import Layout from '../../shared/layout'
import { withRouter } from 'react-router-dom'
import './single-product.styles.scss'
import { CartContext } from '../../context/cart-context'
import { isInCart } from '../../helpers'
const SingleProduct = ({match, history: {push}}) => {
  const { products } = useContext(ProductsContext);
  const {addProduct, cartItems, increase, decrease} = useContext(CartContext) 
  const {id} = match.params
  const [product, setProduct] = useState(null);
  // useEffect use when the page got initiate
  useEffect(() => {
    const product = products.find(item => Number(item.id) === Number(id))
    
    if(!product) {
        return push('/shop');
    }
    setProduct(product)
  }, [id, product, push, products])
  //[id, product, push, products] provdie as dependencies. React Hook useEffect contains a call to 'setProduct'. Without a list of dependencies, this can lead to an infinite chain of updates. To fix this, pass [products, id, push] as a second argument to the useEffect Hook  react-hooks/exhaustive-deps
  if(!product) {return null}
  const {imageUrl, title, price, description} = product;
  const itemInCart = isInCart(product, cartItems)
  return (
    <Layout>
        <div className='single-product-container'>
            <div className='product-image'>
                <img src={imageUrl} alt="product" />
            </div>
            <div className='product-details'>
                <div className='name-price'>
                    <h3>{title}</h3>    
                    <p>{price}</p>
                </div>
                <div className='add-to-cart-btns'>
                {
                    !itemInCart &&
                    <button className='button is-white nomad-btn' id = 'btn-white-outline'
                    onClick={() => addProduct(product)}>ADD TO CART</button> 
                }
                {
                    itemInCart &&
                    <div>
                    <button className='button is-black nomad-btn' id= 'btn-white-outline'
                    onClick={() => {increase(product)}}>
                    ADD MORE</button> 
                    <button className='button is-black nomad-btn' id= 'btn-white-outline'
                    onClick={() => {decrease(product)}}>
                    DELETE 1</button> 
                    </div>
                    
                }
                    
                    
                </div>
                <div className='product-description'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default withRouter(SingleProduct)