import React from 'react'
import "../css/payment.css"

function Payment() {
  return (
    <div className='outer'>

    <div className='main'>
     <div className='left'>
         <h1>Billing</h1>
         <h2>Payment Method</h2>
         <tab>
            <h3>Card</h3>  <h3>UPI</h3>
           
         </tab>
     </div>
     <div className='right'>
    RIGHT
     </div>

    </div>
    </div>
  )
}

export default Payment