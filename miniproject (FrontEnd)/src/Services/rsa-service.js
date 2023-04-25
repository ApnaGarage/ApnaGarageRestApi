import { myAxios } from "./helper";

export const rsaService=(road)=>{

return myAxios
.post('/api/rsa/postrsa',road)
.then((response)=>response.rsa)

};