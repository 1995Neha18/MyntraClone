import axios from "axios"
import { baseUrl } from "../../utils/baseUrl"
import { productFaliureAction, productRequestAction, productSuccessAction, wproductFaliureAction, wproductRequestAction, wproductSuccessAction } from "./action"
import { getlocalSt } from "../../utils/localStorage"


//
export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST"
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE"
//


//
export const W_GET_PRODUCTS_REQUEST = "W_GET_PRODUCTS_REQUEST"
export const W_GET_PRODUCTS_SUCCESS = "W_GET_PRODUCTS_SUCCESS"
export const W_GET_PRODUCTS_FAILURE = "W_GET_PRODUCTS_FAILURE"
//





//

export const getProducts = (obj) => (dispatch) =>{
    dispatch(productRequestAction())
    axios.all([
        axios.get(`${baseUrl}products/filter`,{
            params:{
                category:"Mens",
                 ...obj
            },

            headers:`bearer ${getlocalSt("token") }`

        }),
        axios.get(`${baseUrl}products/pagination`,{
            params:{
              category:"Mens",
              limit:5,
              page:obj.page
            },

            headers:`bearer ${getlocalSt("token") }`

        })
      ])
      .then(axios.spread((res1, res2) => {
        dispatch(productSuccessAction(res1.data))
        obj.page &&  dispatch(productSuccessAction(res2.data))
      }))
      .catch(error => {
        console.error(dispatch(productFaliureAction()));
      });
      
}

//




//

export const wgetProducts = (obj) => (dispatch) =>{
    dispatch(wproductRequestAction())
    axios.all([
        axios.get(`${baseUrl}products/filter`,{
            params:{
                category:"Womens",
                 ...obj
            },

            headers:`bearer ${getlocalSt("token") }`

        }),
        axios.get(`${baseUrl}products/pagination`,{
            params:{
              category:"Womens",
              limit:5,
              page:obj.page
            },

            headers:`bearer ${getlocalSt("token") }`

        })
      ])
      .then(axios.spread((res1, res2) => {
        dispatch(wproductSuccessAction(res1.data))
        obj.page &&  dispatch(wproductSuccessAction(res2.data))
      }))
      .catch(error => {
        console.error(dispatch(wproductFaliureAction()));
      });
      
}

//





//

export const filter =(e,brand,setBrand) =>{
    let newbrand = [...brand]
    let value = e.target.value
    if(newbrand.includes(value)){
        newbrand.splice((brand.indexOf(value)),1)
    }
    else{
      newbrand.push(value)
    }
   setBrand(newbrand)
} 


//