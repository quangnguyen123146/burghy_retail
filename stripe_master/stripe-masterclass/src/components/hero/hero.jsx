import React from 'react'
import './hero.styles.scss'


const Hero = () => {
  return (
    <section className='hero is-info is-large hero-image'>
        <div className="hero-body">
            <div className='container'>
                <h1 className='title'>Get Burghy modern looks</h1>
                <button className='button is-black'
                id = 'shop-now'>SHOP NOW</button>
            </div>
        </div>
    </section>
  )
}

export default Hero