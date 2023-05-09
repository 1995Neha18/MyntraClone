import React from 'react'
import "./singleCartItem.css"
import SizeModal from './SizeModal';
import QtyModal from './QtyModal';
import RemoveItem from './RemoveItem';
import axios from 'axios';




const SingleCartItem = ({image,title,size,org_price,discount,brand,id}) => {
 
   const handleDelete = (id) => {
     console.log(id)
   }
   // console.log(id)
  return (
    <div className='sgl__prod__main'>
        <div>
          <img 
            src={image}
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
              <p><s>₹ {500}</s></p>
              <p>{discount}</p>
           </div>
        </div>
        <div className='remove__item'>
           <RemoveItem id={id} />
        </div>
        
    </div>
  )
}

export default SingleCartItem


