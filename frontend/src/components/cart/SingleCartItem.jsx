import React from 'react'
import "./singleCartItem.css"
import SizeModal from './SizeModal';
import QtyModal from './QtyModal';
import RemoveItem from './RemoveItem';
import { CircularProgress } from '@chakra-ui/react';


const SingleCartItem = ({image,title,size,org_price,discount,brand,id,handleDel,Qty,lId,loading}) => {
 
 let dis = parseInt(discount.match(/\d+/)[0])/100
 let  amount_off = (org_price*size[0]/(1-dis))

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
              {lId===id && loading===true?  (loading===true?<CircularProgress style={{position:"relative",zIndex:"999"}} isIndeterminate color='green.300' />:null):null}
              <QtyModal
              id={id}
              Qty={Qty}
              qty={size[0]}
              />
           </div>
           <div className='sgl__prod__price'>
              <p><b>₹ {org_price*size[0]}</b></p>
              <p><s>₹ {amount_off.toFixed(0)}</s></p>
              <p>{discount}</p>
           </div>
        </div>
        <div className='remove__item'>
           <RemoveItem
            id={id}
            handleDelete={handleDel}
            />
        </div>   
    </div>
  )
}

export default SingleCartItem


