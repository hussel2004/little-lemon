import { useState } from "react";
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  // State for client info
  const [clientInfo, setClientInfo] = useState({
    firstName: "",
    lastName: "",
    telephone: "",
    email: "",
  });

  // State to track selected payment method
  const [paymentMethod, setPaymentMethod] = useState("credit");

  // State for credit card fields
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cvv: "",
  });

  // Handle general input changes
  function handleChange(e) {
    const { id, value } = e.target;
    setClientInfo((prev) => ({ ...prev, [id]: value }));
  }

  // Handle payment method selection
  function handlePaymentChange(e) {
    setPaymentMethod(e.target.value);
  }

  // Handle credit card info change
  function handleCardInfoChange(e) {
    const { id, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [id]: value }));
  }

  // Form submission
  function handleSubmit(e) {
    e.preventDefault();
    // Example form logic (could validate fields here)
    alert("Your booking has been completed successfully!");
  }

  return (
  <>
    <h2 className="form-title">CONFIRMATION FORM</h2> {/* Title added */}
    <form onSubmit={handleSubmit} className="booking-form">
         
      <div className="input-section">
        {/* Personal Info Inputs */}
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={clientInfo.firstName}
          onChange={handleChange}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={clientInfo.lastName}
          onChange={handleChange}
          required
        />

        <label htmlFor="telephone">Telephone:</label>
        <input
          type="tel"
          id="telephone"
          value={clientInfo.telephone}
          onChange={handleChange}
          required
          pattern="\d{8,15}"
          title="Phone must be 8–15 digits"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={clientInfo.email}
          onChange={handleChange}
          required
        />

        

      {/* Payment Section */}
      
        <label htmlFor="paymentMethod">Payment Method</label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={handlePaymentChange}
        >
          <option value="credit">Credit card</option>
          <option value="paypal">PayPal</option>
        </select>

        {/* Conditionally render credit card inputs */}
        {paymentMethod === "credit" && (
          <div className="credit-card-fields">
            <label htmlFor="cardNumber">Credit Card Number</label>
            <input
              type="text"
              id="cardNumber"
              value={cardInfo.cardNumber}
              onChange={handleCardInfoChange}
              required
              pattern="\d{16}"
              maxLength="16"
              title="Enter a valid 16-digit credit card number"
            />

            <label htmlFor="cvv">CVV (3-digit)</label>
            <input
              type="text"
              id="cvv"
              value={cardInfo.cvv}
              onChange={handleCardInfoChange}
              required
              pattern="\d{3}"
              maxLength="3"
              title="Enter a valid 3-digit CVV"
            />
          </div>
        )}

        {/* Conditionally render PayPal button */}
        {paymentMethod === "paypal" && (
  <div className="paypal-button">
    
    <button type="button" className="paypal-btn">
      <span className="paypal-logo-letter">P</span>
      <span className="paypal-word">
        <span className="pay">Pay</span>
        <span className="pal">Pal</span>
      </span>
    </button>
  </div>
)}

        {/* Submit button */}
        <input
          type="submit"
          value="Confirm your reservation"
          className="submit-btn"
        />
      
      </div>
    </form>
  </>
    
  );
}

export default ConfirmedBooking;
