import React from 'react'
import "../Styles/Hero.css"
import { Star, MoveUp , Download} from 'lucide-react'
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
        <div className='Hero-bottom-Card'>
          <img src="https://i.pinimg.com/736x/00/61/60/006160e2c1859ae3efa01b63b47b45ae.jpg" alt="" className='Hero-bottom-img' />
          <div className='Hero-bottom-text'>Create  <br /> Design</div>
        </div>
        <div className='Hero-bottom-right-Card'>
        <div className='Hero-bottom-right-Card-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, repellat.
        </div>
        <div className='Hero-bottom-download'>
          <button className='Hero-bottom-button'><span className='Download-text'>Download</span> <span className='Download-button'><Download /></span> </button>
        </div>
        </div>
        
    </div>
  )
}

export default Hero