import React from 'react'
import "./cart.css"
import { GoTag } from 'react-icons/go';
import { TbDiscount2 } from 'react-icons/tb';
import { CiBookmarkCheck } from 'react-icons/ci';
import { FaChevronRight } from 'react-icons/fa';
import CartAccr from "./CartAccr"
import SingleCartItem from './SingleCartItem';


const Cart = () => {
  return (
    <div className='main'>
  
       <div className='cart__items__section'>

            <div>
               <p className='p__prod'><b>Check delivery time & services</b></p>
               <button className='enter__pin'>ENTER PIN CODE</button>
            </div>

            <div>
               <div>
                  <TbDiscount2 className='tag__icon'/>
                  <p><b>Available Offers</b></p>
               </div>
               <li>Get up to Rs 500 Cashback on CRED pay(Android Devices only) on a min spend of Rs 1000. TCA</li>
               <CartAccr/>
            </div>

            <div>
               <img src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp" alt="pic" width="40px" height="40px" />
               <p>Yay! <span className='silver'>No convenience fee</span> on this order.</p>
            </div>
            <div className='cart__single'>
               <div>< SingleCartItem /></div>
               <div>< SingleCartItem /></div>
               <div>< SingleCartItem /></div>
               
            </div>
            
            <div className='cart__wishlist'>
               <div>
                  <CiBookmarkCheck className='tag__icon'/>
                  <a href=""><b>Add More From Wishlist</b></a>
               </div>
              <div><FaChevronRight/></div>
            </div>
       </div>



{/* -----------------price section------------------- */}
       <div className='price__section'>

           <p className='p__heading'>COUPONS</p>
           <div className='price__section__coupons' >
              <div>
                  <GoTag className='tag__icon'/>
                  <p><b>Apply Coupons</b></p>
              </div>
              <div>
                <button>
                   APPLY
                </button>
              </div>
           </div>

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