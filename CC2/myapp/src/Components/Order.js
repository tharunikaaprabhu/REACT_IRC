import React from 'react';
import '../Assets/Css/order.css'; // Import your CSS file

const Order = () => {
  return (
    <div className="order-received-container">
      <div className="order-received">
        <h2>Order Received!</h2>
        <p>Thank you for your purchase. Your order has been successfully received.</p>
        <p>We'll send you a confirmation email shortly.</p>
        {/* Additional information or buttons can be added here */}
      </div>
    </div>
  );
};

export default Order;
