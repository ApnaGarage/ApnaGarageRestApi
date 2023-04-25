import { myAxios } from "../Services/helper"

export const adminService=(user)=>{

 return myAxios
 .post('/api/adminlogin/postadmin',user)
 .then((response)=>response.data)
 
 };