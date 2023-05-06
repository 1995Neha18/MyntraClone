import React from 'react'
import "./cart.css"
import { BsTag } from 'react-icons/bs';
import { Button} from '@chakra-ui/react'

const Cart = () => {
  return (
    <div className='main'>
       <div className='cart__items__section'></div>




       <div className='price__section'>
           <p className='p__heading'>COUPONS</p>
           <div className='price__section__coupons' >
              <div>
                  <BsTag className='tag__icon'/>
                  <p><b>Apply Coupons</b></p>
              </div>
              <div>
                <button>
                   APPLY
                </button>
              </div>
           </div>
{/* ------------------------------------------------- */}
           <p className='p__heading'>GIFTING & PERSONALISATION</p>
           <div className='price__gift__container'>
              <div>
                 <img src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp" alt="rbn"/>
              </div>
              <div>
                <p><b>Buying for a loved one?</b></p>
                <p>Gift wrap and personalised message on card, Only for  <span><b>₹25</b></span> </p>
                <button>ADD GIFT WRAP</button>
              </div>
           </div>
           {/* ------- */}
           <p className='p__heading'>PRICE DETAILS (1 items)</p>
           <div className='price__detail'>
              <div>
                 <p>Total MRP</p>
                 <p>₹ 2,899</p>
              </div>
              <div>
                 <p>Discount on MRP</p>
                 <p><span className='green'>- ₹1,450</span> </p>
              </div>
              <div>
                 <p>Coupon Discount</p>
                 <p><span className='red'> Apply Coupon</span></p>
              </div>
              <div>
                 <p>Convenience Fee <span className='red'>Know More</span></p>
                 <p> <s>₹99</s> <span className='green'>Free</span></p>
              </div>
           </div>
           <div className='price__total'>
             <p><b>Total Amount</b></p>
             <p><b>₹1,450</b></p>
           </div>
           <button className='order__button'> PLACE ORDER</button>
       </div>
    </div>
  )
}

export default Cart