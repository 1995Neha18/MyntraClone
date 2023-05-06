import React from 'react'
import "./cart.css"
import { BsTag } from 'react-icons/bs';
import { Button} from '@chakra-ui/react'

const Cart = () => {
  return (
    <div className='main'>
       <div className='cart__items__section'></div>
       <div className='price__section'>
           <p>COUPONS</p>
           <div className='price__section__coupons' >
              <div>
                <BsTag/>
                <p>Apply Coupons</p>
              </div>
              <Button colorScheme='read' variant='outline'  size='sm'>
                  APPLY
              </Button>
           </div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
       </div>
    </div>
  )
}

export default Cart