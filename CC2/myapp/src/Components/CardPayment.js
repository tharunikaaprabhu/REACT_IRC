import {Link} from "react-router-dom";
import React, { useState } from 'react';
import '../Assets/Css/CardPayment.css'; // Import CSS file for styling

const CardPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCVV] = useState('');
  const [name, setName] = useState('');

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
  };

  const handleExpiryChange = (e) => {
    setExpiry(e.target.value);
  };

  const handleCVVChange = (e) => {
    setCVV(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentData = {
      cardNumber,
      expiry,
      cvv,
      name,
    };
    // Handle the payment data (e.g., send it to a backend or process it)
    console.log(paymentData); // Replace with your logic
  };

  return (
    <div className="payment-container">
      <h2>Secure Payment</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name on Card:</label>
          <input type="text" value={name} onChange={handleNameChange} required />
        </div>
        <div className="form-group">
          <label>Card Number:</label>
          <input type="text" value={cardNumber} onChange={handleCardNumberChange} />
        </div>
        <div className="form-group">
          <label>Expiry Date:</label>
          <input type="text" value={expiry} onChange={handleExpiryChange} />
        </div>
        <div className="form-group">
          <label>CVV:</label>
          <input type="text" value={cvv} onChange={handleCVVChange} />
        </div>
        <button type="submit">
   <Link to="/PaymentPage"> Pay Now</Link>
            </button>
      </form>
    </div>
  );
};

export default CardPayment;