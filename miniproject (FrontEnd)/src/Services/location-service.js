import { myAxios } from '../Services/helper'


export const locationService=(location)=>{

 return myAxios
 .post('/api/locations/postlocation',location)
 .then((response)=>response.locate)
 
 };