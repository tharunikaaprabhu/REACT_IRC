import {Link} from "react-router-dom";
import React, { useState } from 'react';
import '../Assets/Css/DigitalPayment.css'; // Import CSS file for styling

const DigitalPayment = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the digital payment submission
    console.log(`Phone Number: ${phoneNumber}, Amount: ${amount}`);
    // You can integrate this with your actual payment processing logic here
  };

  return (
    <div className="digital-payment-container">
      <h2>PhonePe Payment</h2>
      <form className="digital-payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="Enter Phone Number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="text"
            id="amount"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter Amount"
          />
        </div>
        <button type="submit">
            <Link to="/PaymentPage">Pay with PhonePe</Link></button>
      </form>
    </div>
  );
};

export default DigitalPayment;
