import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const initialState = {
  //checking that our sidebar is open or not initial value is false
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
};

const ProductsContext = React.createContext()
//redux is playing role here 
export const ProductsProvider = ({ children }) => {
const [state,dispatch]= useReducer(reducer,initialState)
const openSidebar=()=>{
  dispatch ({type: SIDEBAR_OPEN})
}

const closeSidebar = () => {
  dispatch({ type: SIDEBAR_CLOSE });
};

const fetchProducts= async(url)=>{
  const response=await axios.get(url)
  console.log(response)
}
useEffect(()=>{
fetchProducts(url);
},[])
//useEfffects hooks has been defined
// useEffect(()=>{
//   openSidebar()
// },[])
return (
    <ProductsContext.Provider value={{...state, openSidebar,closeSidebar}}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
