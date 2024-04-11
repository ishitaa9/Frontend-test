import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpeg'

const Hero = () => {
  return (
    <>
    <div className='hero-wrapper'>
      <div className='hero-left'>
        <div className='text'>
          <p>
            <b>Lorem ipsum dolor sit amet,</b>
            consetetur sadipscing elitr.
          </p>
        </div>
      </div>

      <div className='hero-right'>
        <img src={hero} alt="hero" className='hero-logo'/>
      </div>
    </div>
    </>
  )
}

export default Hero