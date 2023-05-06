import axios from "axios"
import { baseUrl } from "../../utils/baseUrl"
import { productFaliureAction, productRequestAction, productSuccessAction } from "./action"


export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST"
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS"
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE"



//


export const getProducts = (dispatch) =>{
    dispatch(productRequestAction())
    axios.get(`${baseUrl}products?category=Mens`,{
        headers:{
            Authorization:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDU1NjJlYzAxZGM3MWU5NzRmYmFlZGUiLCJpYXQiOjE2ODMzMTc0OTJ9.NpF8UHiEYg4015mSonxU9Gd3MYNaRoTKPVhxu62wBpY"
        }
    })
    .then((res)=>{dispatch(productSuccessAction(res.data))})
    .catch((err)=>{dispatch(productFaliureAction())})
}



//