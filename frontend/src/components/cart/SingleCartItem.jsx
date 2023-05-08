import React from 'react'
import "./singleCartItem.css"
import SizeModal from './SizeModal';
import QtyModal from './QtyModal';
import RemoveItem from './RemoveItem';




const SingleCartItem = () => {
  return (
    <div className='sgl__prod__main'>
        <div>
          <img 
            src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/17878456/2022/4/13/63f4671a-e00e-4479-a80f-f44f1698aaaa1649854718511CorsicaReflectionGoldSolidGlassMirror1.jpg" 
            alt="pic"
           />
        </div>
        <div>
           <p><b>Home Centre</b></p>
           <p>Gold-Toned Reflection Solid Glass Mirror</p>
           <div>
              <SizeModal/>
              <QtyModal/>
           </div>
           <div className='sgl__prod__price'>
              <p><b>₹ 1,349</b></p>
              <p><s>₹ 2,999</s></p>
              <p>55% OFF</p>
           </div>
        </div>
        <div className='remove__item'>
           <RemoveItem />
        </div>
        
    </div>
  )
}

export default SingleCartItem


