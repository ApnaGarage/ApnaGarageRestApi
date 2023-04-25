import {useEffect,useState} from 'react';
import { Container, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Button } from '../Style/Button';
import { NavLink } from 'react-router-dom';

 
 
 
const Dashboard = () => {
   
 const[record,setRecord] = useState([])
 
  useEffect(()=>{
    fetch().then((result)=>{
        result.json().then((resp)=>{
            console.warn("result",resp);
            setRecord(resp)
        })
    })
  },[])
 

    return (
    <div class="col main pt-5 mt-3">
         
       
        <p class="lead d-none d-sm-block">Add Users Details and Records</p>
 
        <div class="alert alert-warning fade collapse" role="alert" id="myAlert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">Ã—</span>
                <span class="sr-only">Close</span>
            </button>
            <strong>Data and Records</strong> Learn more about employee
        </div>
        <div class="row mb-3">
            <div class="col-xl-2 col-sm-6 py-2">
                <div class="card bg-secondary text-white h-100">
                    <div class="card-body bg-secondary" style={{backgroundColor:"#57b960"}}>
                        <div class="rotate">
                            <i class="fa fa-user fa-4x"></i>
                        </div>
                        <h4 class="text-uppercase" href="#">Users</h4>
                        <h1 class="display-4">13</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-sm-6 py-2">
                <div class="card text-white bg-success h-100">
                    <div class="card-body bg-success">
                        <div class="rotate">
                            <i class="fa fa-list fa-4x"></i>
                        </div>
                        <h4 class="text-uppercase" href="#">Completed</h4>
                        <h1 class="display-4">8</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-sm-6 py-2">
                <div class="card text-white bg-danger h-100">
                    <div class="card-body bg-danger">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h4 class="text-uppercase" href="#">Pending</h4>
                        <h1 class="display-4">5</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-sm-6 py-2">
                <div class="card text-white bg-primary h-100">
                    <div class="card-body bg-primary">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h4 class="text-uppercase" href="#">Service</h4>
                        <h1 class="display-4">7</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-sm-6 py-2">
                <div class="card text-white bg-info h-100">
                    <div class="card-body bg-info">
                        <div class="rotate">
                          <i class="fab fa-twitter fa-4x"></i>
                        </div>
                        <h4 class="text-uppercase" href="#">Break Down</h4>
                        <h1 class="display-4">6</h1>
                    </div>
                </div>
            </div>
            <div class="col-xl-2 col-sm-6 py-2">
                <div class="card text-white bg-warning h-100">
                    <div class="card-body">
                        <div class="rotate">
                            <i class="fa fa-share fa-4x"></i>
                        </div>
                        <h4 class="text-uppercase" href="#">Toatl Amount</h4>
                        <h1 class="display-4">14,236</h1>
                    </div>
                </div>
            </div>
        </div>
 
        <hr/>
       
       
    
       
       {/* pagination */}
      
       <Button className="btn hireme-btn text-center" >
    <NavLink to="/result">Client Details</NavLink>
   </Button>

    </div>
    )
}
 
export default Dashboard
