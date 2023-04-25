import React from 'react'

function Service(){
  return(
    <div className ='container'>
      <header>
        <div className ='d-flex align-items-centre ms-auto'>
        </div>
        <div className =''>
          <h2 className='text-center'style={{ color: 'orange'}} >Our Services</h2>
          <p className ='fs-20 text-muted'>
          At Apna garage we have devised a dedicated and systematically structured process which aims for a hassle free and effortless customer experience. We constantly pursue to create cost-efficient and effective vehicle maintenance solution at your finger tips.
          </p>

        </div>
      </header>
      <main>
        <div className='row row-cols-1 row-cols-md-3'>
          <div className='col'>
            <div className ='card text-centre'>
              <div className='card-header'style={{ backgroundColor: 'orange'}}>
                <h4 className='text-center'>Breakdown Assistance</h4>
                </div>
                <div className='card-body text-center' >
                
                  <img src='https://th.bing.com/th/id/OIP.6Tmnoap9g5TrRfOzxAXS8wHaFg?w=211&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
                </div>
                <div className='card-footer'>
                <p className='fw-normal'>Vehicle breakdown!!! Frustrated and stuck in a middle of nowhere? Got no assistance nearby? Don’t panic. Think of your friend, ApnaGarage to the rescue.</p>
                </div>
            </div>
            
          </div>
           <div className='col'>
            <div className ='card text-centre'>
              <div className='card-header'style={{ backgroundColor: 'orange'}}>
                <h4 className='text-center'>Pick n Drop Servicing</h4>
                </div>
                <div className='card-body'>
                  
                <img src='https://th.bing.com/th/id/OIP.wikl32J3W50Kr9qFSMRxAAHaEc?w=272&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'/>
                </div>
                <div className='card-footer'>
                <p className='fw-normal'>Regular maintenance, Spare replacement, Engine works, Custom Mods, Restoration- You name it and we got it. Get your vehicle picked and dropped at your desired location.</p>
                </div>
            </div>
            
          </div>
          <div className='col'>
            <div className ='card text-centre'>
              <div className='card-header'style={{ backgroundColor: 'orange'}}>
                <h4 className='text-center'>Doorstep Servicing</h4>
                </div>
                <div className='card-body'>
            
                  <img src='data:image/jpeg;base64,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'/>
                </div>
                <div className='card-footer'>
                <p className='fw-normal'>Regular maintenance, Minor spare replacement right at your doorstep. See your valuable companion get serviced in your presence and vigilance.</p>
                </div>
            </div>
            
          </div>
        </div>
        {/* <h2 className='text-centre fw-normal my-5'>compare plan</h2>
        <div className=''>
          <table className='table text-centre'>
            <thead>
              <tr>
                <th style={{with:"34%"}} ></th>
                <th style={{with:"34%"}} >free</th>
                <th style={{with:"34%"}} >pro</th>
                <th style={{with:"34%"}} >Enterprise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Public</th>
                <th>Public</th>
                <th>Public</th>
                <th>Public</th>
              </tr>
              <tr>
                <th>Public</th>
                <th>Public</th>
                <th>Public</th>
                <th>Public</th>
              </tr>
            </tbody>
          </table>
        </div> */}
      </main>
    </div>
  )
}
export default Service