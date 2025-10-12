import React from 'react'
import "../Styles/Hero.css"
import { Star, MoveUp } from 'lucide-react'
const Hero = () => {
  return (
    <div className='Hero-main'>
        <div className='Hero-left-Card'>
          Dive Into The <br />
          World Of <br />
          <span className='Hero-left-card-color'>Inspiration</span>

        </div>

        <div className='Hero-right-Card'>
            <div className='Hero-right-Card-image'>
                <img src="https://i.pinimg.com/736x/e4/52/22/e4522205e2ef5f155eff7983ad7f6e7d.jpg" alt="" className='Hero-right-img' />
            </div>
            <div className='Hero-right-Card-sidebar'>
              <div className='Hero-right-Card-stars'>
                <Star />
                <Star />
              </div>
              <div className='Hero-right-Card-arrow'>
                <MoveUp size={42} />
              </div>
            </div>
        </div>

    </div>
  )
}

export default Hero