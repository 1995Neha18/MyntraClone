import React, { useEffect, useState } from 'react'
import "./cart.css"
import { GoTag } from 'react-icons/go';
import { TbDiscount2 } from 'react-icons/tb';
import { CiBookmarkCheck } from 'react-icons/ci';
import { FaChevronRight } from 'react-icons/fa';
import CartAccr from "./CartAccr"
import SingleCartItem from './SingleCartItem';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const [data,setData] = useState([])
  
//   let getCartData = async() => {
//      try{
//         let res = await fetch(`http://localhost:8080/cart`,{
//          method:"GET",
//          headers:{
//             "Content-Type":"appliction/json",
//             authorization:
//          },

//         })
//          res = await res.json()
//          setData(res)
//          console.log(res)
//      }catch(err){
//         console.log(err.message)
//      }
//   }
const navigate = useNavigate()

function handleAddress(){

   navigate("/cart/address");
 }

  useEffect(() => {
      axios.get(`https://urban-backend.onrender.com/cart`,{
         headers:{
            Authorization:`bearer ${localStorage.getItem("token")}`
         }
      }).then((res)=>setData(res.data))
  },[])
  


   let total__price = data.map(({strike_price})=>{return strike_price})
   let total = total__price.reduce((sum,el) =>{
      return sum+el
    },0)

   //  let dis__price = data.map(({discounted_price})=>{return discounted_price})
   // let dis__total = dis__price.reduce((sum,el) =>{
   //    return sum+Number(el)
   //  },0)
   let dis = (total__price.length*200)
    console.log({"total":total})
    console.log({"discount":dis})
    
  return (
  
    <div className='main_cart'>
  
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
              
              {data && data?.map((
               {
                  image,
                  size,
                  title,
                  strike_price,
            
                  discount,
                  brand,
                  _id
               }) => {
                  return(
                     <div>
                        < SingleCartItem 
                           key={Date.now()}
                           image={image[0]}
                           title = {title}
                           size = {size}
                           org_price = {strike_price}
                     
                           discount = {discount}
                           brand = {brand}
                           id = {_id}
                         
                        />
                     </div>
                  )
               }
              )}
               
           
               
               
            </div>
            
            <div className='cart__wishlist'>
               <div>
                  <CiBookmarkCheck className='tag__icon'/>
                  <p><b>Add More From Wishlist</b></p>
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
                 <p>₹ {total}</p>
              </div>
              <div>
                 <p>Discount on MRP</p>
                 <p><span className='green'>- ₹ {dis}</span> </p>
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
             <p><b>₹ {total-dis}</b></p>
           </div>

           <button className='order__button' onClick={handleAddress}> PLACE ORDER</button>
       </div>
     
    </div>
  
  )

}



export default Cart