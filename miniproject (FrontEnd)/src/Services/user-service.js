import { myAxios } from '../Services/helper'


export const userService=(user)=>{

return myAxios
.post('/api/users/postuser',user)
.then((response)=>response.data)

};