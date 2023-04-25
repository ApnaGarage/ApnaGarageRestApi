import React, { useState } from 'react'
import { Container, Input } from 'reactstrap'
import BookNow from './BookNow'
import RoadSideAssistance from './RoadSideAssistance';

const ShowHideFunctionality = () => {

 
    const [visible,setVisible]=useState(false);

    const [view,setView]=useState(false);

     
  return (
   <React.Fragment>
    <Container>
        <div className='row'>
            <div className='col-sm-6'>
                <h2 className='mt-3'>Select the Services</h2>
                <div className='form-group row'>
                    <label className='col-sm-3 col-from-label'></label>
                    <div className='col-sm-2 mt-2'>BreakDown
                    <input type='radio' className='mx-2' name='isyes' value='1' onClick={()=>setView(true)}/>
                    </div>


                    <div className='col-sm-2 mt-2'>Pick/Drop 
                    <input type='radio' className='mx-3 mt-1' name='isyes' value='1'onClick={()=>setVisible(true)}/>
                    </div>

                    <div className='col-sm-2 mt-2'>Reset
                    <input type='radio' className='mx-3 mt-1' name='isyes' value='1'onClick={()=>setView(false)}/>
                    </div>

                    <div className='col-sm-2 mt-2'>Reset Pick 
                    <input type='radio' className='mx-3 mt-1' name='isyes' value='1'onClick={()=>setVisible(false)}/>
                    </div>



                   

                    {visible && 
                    
                    <BookNow/> 
                   
                    }

                    {view &&
                   <RoadSideAssistance/>
                    }
      
                         {/* <div className='from-group row mt-5 text-center'>
                        <label className='col-sm-2 col-form-label'></label>
                        <div className='col-sm-6 mt-2'>
                            <button name='button' className='btn btn-primary btn-lg'>Sumbit</button>
                        </div>
                    </div>  */}
                </div>
            </div>
        </div>
    </Container>
   </React.Fragment>
  )
}

export default ShowHideFunctionality
