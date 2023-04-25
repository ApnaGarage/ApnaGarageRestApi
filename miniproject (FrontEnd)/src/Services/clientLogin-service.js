import { myAxios } from "../Services/helper"

export const clientService=(user)=>{

 return myAxios
 .post('/api/login/',user)
 .then((response)=>response.data)
 
 };