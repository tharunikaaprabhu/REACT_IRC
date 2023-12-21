import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import '../Assets/Css/PaymentPage.css'; // Import CSS file for styling

const PaymentPage = () => {
  const [selectedPayment, setSelectedPayment] = useState('');

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the selected payment type based on 'selectedPayment'
    console.log('Selected Payment:', selectedPayment);
  };

  return (
    <div className="form-container">
      <h2>Select Payment Method</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="payment-option">
          <input
            type="radio"
            id="cardPayment"
            name="paymentType"
            value="card"
            checked={selectedPayment === 'card'}
            onChange={handlePaymentChange}
          />
          <Link to="/CardPayment">Card Payment</Link>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="digitalPayment"
            name="paymentType"
            value="digital"
            checked={selectedPayment === 'digital'}
            onChange={handlePaymentChange}
          />
          <Link to="/DigitalPayment">Digital Payment</Link>
        </div>

        <div className="payment-option">
          <input
            type="radio"
            id="cashOnDelivery"
            name="paymentType"
            value="cashOnDelivery"
            checked={selectedPayment === 'cashOnDelivery'}
            onChange={handlePaymentChange}
          />
          <Link to="\CashOnDelivery">Cash on Delivery</Link>
        </div>

        <button type="submit">
            <Link to="/Order">Proceed to Payment</Link>
            </button>
      </form>
    </div>
  );
};

export default PaymentPage;
