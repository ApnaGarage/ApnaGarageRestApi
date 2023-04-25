import {useEffect,useState} from 'react'
import {Table,Button} from 'reactstrap'

const GetAllBBoking = () => {


   const[data,setData]=useState([])

useEffect(()=>{
  getUsers() 
 },[]) 
 console.warn(data)

 function getUsers()
 {
  fetch ("http://localhost:9090/api/locations/").then((result)=>{
   result.json().then((resp)=>{
      console.warn("result",resp);
      setData(resp)
      })
    })
  
 }

function deleteUser(catId)

{
  fetch(`http://localhost:9090/api/locations/${catId}`,{
    method:'DELETE'
  }).then((result)=>{
    result.json().then((resp)=>{
      console.warn(resp)
    })

  })
}
  return (

<div>
   <h2>ALL BOOKING DETAILS</h2>
<Table warn>
  <thead>
    <tr>
      <th>
        #
      </th>
      <th>
      Name
      </th>
      <th>
        Street
      </th>
      <th>
        City
      </th>
      <th>
        State
      </th>
      <th>
        Zip
      </th>
      <th>
      Bike Company
      </th>
      <th>
      Bike Model
      </th>
      <th>
      Operations 
      </th>
    </tr>
  </thead>
  <tbody>
  {
         data.map((item)=>
         <tr>
            <td>{item.id}</td>
         <td>{item.name}</td>
         <td>{item.street}</td>
         <td>{item.city}</td>
         <td>{item.state}</td>
         <td>{item.zip}</td>
         <td>{item.bikeCompany}</td>
         <td>{item.bikeModel}</td>
         <td><Button color='primary' onClick={()=>deleteUser(item.id)}>Delete</Button></td>
      </tr>
         )
      }
  </tbody>
</Table>

     



</div>

   )
}

export default GetAllBBoking