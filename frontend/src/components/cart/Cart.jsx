import React, { useEffect, useState } from "react";
import "./cart.css";
import { GoTag } from "react-icons/go";
import { TbDiscount2 } from "react-icons/tb";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import CartAccr from "./CartAccr";
import SingleCartItem from "./SingleCartItem";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { cartLength } from "../Navbar";
import { useDispatch } from "react-redux";
import { Button, useToast } from '@chakra-ui/react'

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lId, setLId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast()

  function handleAddress() {
      const checkoutData = {
        total,total_mrp,dis,data:data.length
      }
      navigate("/cart/address", { state: { checkoutData} });
  }

  // Getting all the Card items
  const getCartData = () => {
    axios
      .get(`https://urban-backend.onrender.com/cart`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if(typeof res.data !== "object"){
          toast({
            title: `${res.data}`,
            status: 'error',
            duration:1500,
            position:'top',
            isClosable: true,
          });
             navigate("/login")
        }else{
          setData(res.data);
          dispatch({ type: "cartLength", payload: res.data.length });
          console.log({"msg":res.config.data})
        }
      })
      .catch((err)=>{
          console.log({"msg":err.message})
      })
  };


// deleting item from cart
  const handleDel = (id) => {
    axios
      .delete(`https://urban-backend.onrender.com/cart/${id}`, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        getCartData()
        toast({
          title: 'Successfully Deleted.',
          description: "This product has been deleted to your cart.",
          status: 'success',
          duration:1500,
          position:'top',
          isClosable: true,
        });
      });
  };


  // handle quantity in a card
  const Qty = ({ quantity, id }) => {
    let qty = { size: [quantity] };
    setLoading(true);
    setLId(id);
    axios
      .patch(`https://urban-backend.onrender.com/cart/${id}`, qty, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        getCartData();
        setLoading(false);
        setLId(id);
      });
  };


  // useEfect for mount phase
  useEffect(() => {
    getCartData();
  }, []);

  
  // total MRP with discount
  let total =
    typeof data == "object" &&
    data.reduce((sum, el) => {
      return sum + el.strike_price * el.size[0];
    }, 0);

  // total MRP without discount
  let total_mrp =
    typeof data == "object" &&
    data.reduce((sum, el) => {
      let dis = parseInt(el.discount.match(/\d+/)[0]) / 100;
      let amount_off = (el.strike_price * el.size[0]) / (1 - dis);
      return sum + amount_off;
    }, 0);

  // discount price
  let dis = total_mrp?.toFixed(0) - total?.toFixed(0);
console.log(data)
  return (
    <>
  {data.length!==0?
     
    <div className="main_cart">
      <div className="cart__items__section">
        <div>
          <p className="p__prod">
            <b>Check delivery time & services</b>
          </p>
          <button className="enter__pin">ENTER PIN CODE</button>
        </div>

        <div>
          <div>
            <TbDiscount2 className="tag__icon" />
            <p>
              <b>Available Offers</b>
            </p>
          </div>
          <li>
            Get up to Rs 500 Cashback on CRED pay(Android Devices only) on a min
            spend of Rs 1000. TCA
          </li>
          <CartAccr />
        </div>

        <div>
          <img
            src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp"
            alt="pic"
            width="40px"
            height="40px"
          />
          <p>
            Yay! <span className="silver">No convenience fee</span> on this
            order.
          </p>
        </div>
        <div className="cart__single">
          {typeof data == "object" &&
            data.map(
              ({
                image,
                size,
                title,
                strike_price,

                discount,
                brand,
                _id,
              }) => {
                return (
                  <div>
                    <SingleCartItem
                      key={Date.now()}
                      image={image[0]}
                      title={title}
                      size={size}
                      org_price={strike_price}
                      discount={discount}
                      brand={brand}
                      id={_id}
                      handleDel={handleDel}
                      Qty={Qty}
                      lId={lId}
                      loading={loading}
                    />
                  </div>
                );
              }
            )}
        </div>

        <div className="cart__wishlist">
          <div>
            <CiBookmarkCheck className="tag__icon" />
            <p>
              <b>Add More From Wishlist</b>
            </p>
          </div>
          <div>
            <FaChevronRight />
          </div>
        </div>
      </div>

      {/* -----------------price section------------------- */}
      <div className="price__section">
        <p className="p__heading">COUPONS</p>
        <div className="price__section__coupons">
          <div>
            <GoTag className="tag__icon" />
            <p>
              <b>Apply Coupons</b>
            </p>
          </div>
          <div>
            <button>APPLY</button>
          </div>
        </div>

        <p className="p__heading">GIFTING & PERSONALISATION</p>
        <div className="price__gift__container">
          <div>
            <img
              src="https://constant.myntassets.com/checkout/assets/img/gift-big.webp"
              alt="rbn"
            />
          </div>
          <div>
            <p>
              <b>Buying for a loved one?</b>
            </p>
            <p>
              Gift wrap and personalised message on card, Only for{" "}
              <span>
                <b>₹25</b>
              </span>{" "}
            </p>
            <button>ADD GIFT WRAP</button>
          </div>
        </div>

        <p className="p__heading">PRICE DETAILS (items {data?data.length:1})</p>
        <div className="price__detail">
          <div>
            <p>Total MRP</p>
            <p>₹ {total_mrp?.toFixed(2)}</p>
          </div>
          <div>
            <p>Discount on MRP</p>
            <p>
              <span className="green">- ₹ {dis}</span>{" "}
            </p>
          </div>
          <div>
            <p>Coupon Discount</p>
            <p>
              <span className="red"> Apply Coupon</span>
            </p>
          </div>
          <div>
            <p>
              Convenience Fee <span className="red">Know More</span>
            </p>
            <p>
              {" "}
              <s>₹99</s> <span className="green">Free</span>
            </p>
          </div>
        </div>
        <div className="price__total">
          <p>
            <b>Total Amount</b>
          </p>
          <p>
            <b>₹ {total?.toFixed(2)}</b>
          </p>
        </div>

        <button className="order__button" onClick={handleAddress}>
          {" "}
          PLACE ORDER
        </button>
        <div className="dash"></div>
      </div>
    </div>
  :
  <div className="empty__img">
        
  <img 
    src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png'
    alt='empty-cart'
    />
    <h4>Add Some items from products page</h4>
    <Link to="/">
      <Button colorScheme='green' variant='solid'>
        Add items
      </Button>
    </Link>
</div>
}
    </>
  );
};

export default Cart;
