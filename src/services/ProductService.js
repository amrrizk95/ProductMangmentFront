import http from './httpService'
import {apiUrl} from '../config.json'


const apiEndpoint = `${apiUrl}/Product`;
  // add customer 
  export function add(product){
    return http.post(apiEndpoint,product,{ headers:{'Content-Type':'multipart/form-data'}});
} 
  // edit 
  export function edit(product){
    return http.put(apiEndpoint,product,{ headers:{'Content-Type':'multipart/form-data'}});
} 
export function getAll(){
   return http.get(`${apiEndpoint}/all`)
} 
export function deleteProduct(id){
  return http.delete(`${apiEndpoint}/${id}`)
}
export function get(id){
  return http.get(`${apiEndpoint}/${id}`)
} 
