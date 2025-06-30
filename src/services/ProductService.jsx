import axios from "axios";
const API_URL="https://fakestoreapi.com/products";
const getAllProducts=()=>{
   return axios.get(API_URL)
}
const getProductById=(id)=>{
  return axios.get(`${API_URL}/${id}`)
}
export {getAllProducts,getProductById}