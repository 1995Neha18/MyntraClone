import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, W_GET_PRODUCTS_FAILURE, W_GET_PRODUCTS_REQUEST, W_GET_PRODUCTS_SUCCESS } from "./actionType"


//

export const productRequestAction = () =>{
    return {type:GET_PRODUCTS_REQUEST}
}

export const productSuccessAction = (payload) =>{
    return {type:GET_PRODUCTS_SUCCESS,payload}
}

export const productFaliureAction = () =>{
    return {type:GET_PRODUCTS_FAILURE}
}

//


//
export const wproductRequestAction = () =>{
    return {type:W_GET_PRODUCTS_REQUEST}
}

export const wproductSuccessAction = (payload) =>{

    return {type:W_GET_PRODUCTS_SUCCESS,payload}
}

export const wproductFaliureAction = () =>{
    return {type:W_GET_PRODUCTS_FAILURE}
}

//