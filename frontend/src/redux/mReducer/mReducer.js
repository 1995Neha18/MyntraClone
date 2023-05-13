import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS} from "./actionType";

const initialState = {
  mProduct:[],
  isLoading:false,
  isError:false,
  cartLength:0
}

function mReducer(state = initialState,{type,payload}) {
  switch(type){
    case GET_PRODUCTS_REQUEST:{
        return {...state,isLoading:true,isError:false}
    }
    case GET_PRODUCTS_SUCCESS:{
        return {...state,isLoading:false,mProduct:payload}
    }
    case GET_PRODUCTS_FAILURE:{
        return {...state,isLoading:false,isError:true}
    }
    case "cartLength" :{
      return {...state,cartLength:payload}
    }
    default :{
        return state
    }
  }
}

export default mReducer;
