import React ,{useEffect} from 'react'
import './Payment.css'
function Payment({packname,packprice}) {
    
    useEffect(() => {
        openTab('card');
    }, []);

    function openTab(tabName) {
        var i;
        var tabContents = document.getElementsByClassName("tab-content");
        for (i = 0; i < tabContents.length; i++) {
            tabContents[i].classList.remove("active");
        }

        document.getElementById(tabName + "Tab").classList.add("active");
    }

  return (
    <div className='main'>
    <div className="main1">
    <div className='left-cont'>
       <div className='left-content'>
       <h1>Billing</h1>
          <h2>Payment Method</h2>
         <div className="tab-container">
                        <div className="tab" onClick={() => openTab('card')}>Card</div>
                        <div className="tab" onClick={() => openTab('upi')}>UPI</div>
                    </div>

                    <div id="cardTab" className="tab-content">
    <form className='card_form' >
       <input type="text" id="cardHolderName" name="cardHolderName" placeholder="Enter Name on Card" required />
        <input type="text" id="cardNumber" name="cardNumber" placeholder="Enter Card Number" required />
        <input type="text" id="expiryDate" name="expiryDate" placeholder="MM/YY" required />
       <input type="text" id="cvv" name="cvv" placeholder="Enter CVV" required />
    </form>
</div>
                    <div id="upiTab" className="tab-content">
                       <form>
                       <input className='upi_id' type="text" id="UPI_ID" name="UPI_ID" placeholder="Enter Your UPI ID" required />
                       </form>
                    </div>
      <div className='btn-div'>
      <button className='bttn'>Back</button>
    <button className='bttn-2'>Proceed to Paymentof Rs {packprice}</button>
      </div>
       </div>
    </div >
    <div className='right-cont'>

      <div className='right_content'>
      <h2> {packname} </h2>
       <h1> Rs {packprice} Only</h1>
       <p>
       Diversify your success with our Select Your Subject Pack, offering the flexibility to choose any domain subject – Science, Commerce, or Humanities & Social Sciences.
       </p>
       <img/>
       
       <h4>Any Domain Subject</h4>
      </div>
    </div>
    </div>
  </div>
  
  )
}

export default Payment