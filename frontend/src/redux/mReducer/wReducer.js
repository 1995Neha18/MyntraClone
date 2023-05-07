import {  W_GET_PRODUCTS_FAILURE, W_GET_PRODUCTS_REQUEST, W_GET_PRODUCTS_SUCCESS } from "./actionType";



const initialState = {
  mProduct:[],
  isLoading:false,
  isError:false
}


function wReducer(state = initialState,{type,payload}) {
  switch(type){
    case W_GET_PRODUCTS_REQUEST:{
        return {...state,isLoading:true,isError:false}
    }
    case W_GET_PRODUCTS_SUCCESS:{
        return {...state,isLoading:false,mProduct:payload}
    }
    case W_GET_PRODUCTS_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    default :{
        return state
    }
  }
}

export default wReducer;
