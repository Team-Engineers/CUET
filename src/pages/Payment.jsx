import React, { useEffect } from 'react';
import './Payment.css';

function Payment({ packname, packprice }) {
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
    <div className="main">
      <div className="container">
        <div className="left">
          <div className="left-content">
            <h1>Billing</h1>
            <h2>Payment Method</h2>
            <div className="tab-container">
              <div className="tab" onClick={() => openTab('card')}>Card</div>
              <div className="tab" onClick={() => openTab('upi')}>UPI</div>
            </div>

            <div id="cardTab" className="tab-content active">
              <form className='card_form'>
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
            <div className="btns">
              <h4 className='back-btn'>Back</h4>
              <h4 className='payment-btn'>Confirm Payment of Rs. {packprice}</h4>
            </div>
          </div>
        </div>

        <div className="right">
        <div className="right-content">
          <h3>{packname}</h3>
           <h1> Rs {packprice} Only</h1>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
