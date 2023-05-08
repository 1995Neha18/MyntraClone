import React from 'react'
import "./singleCartItem.css"
import SizeModal from './SizeModal';
import QtyModal from './QtyModal';
import RemoveItem from './RemoveItem';




const SingleCartItem = ({images,title,size,org_price,dis_price,discount,brand,id}) => {

  return (
    <div className='sgl__prod__main'>
        <div>
          <img 
            src={images}
            alt="pic"
           />
        </div>
        <div>
           <p><b>{brand}</b></p>
           <p>{title}</p>
           <div>
              <SizeModal
                size={size}
              />
              <QtyModal/>
           </div>
           <div className='sgl__prod__price'>
              <p><b>₹ {org_price}</b></p>
              <p><s>₹ {dis_price}</s></p>
              <p>{discount}</p>
           </div>
        </div>
        <div className='remove__item'>
           <RemoveItem />
        </div>
        
    </div>
  )
}

export default SingleCartItem


