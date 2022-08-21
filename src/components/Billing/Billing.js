import React from "react";
import "./Billing.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Billing = () => {
  return (
    <div className="cover">
      <div className="billing-info">Billing Info</div>
      <div className="line-two"></div>
      <div className="billing-name-field">
        <div className="billing-name">
          <h3>Name on Card</h3>
          <div className="billing-asterisk">*</div>
        </div>
        <input
          type="text"
          name="name"
          placeholder="Opara Linus Ahmed"
          className="billing-name-input"
        />
      </div>
      <div className="card-type-field">
        <div className="card-type">
          <h3>Card Type</h3>
          <div className="card-type-asterisk">*</div>
        </div>
        <input
          type="text"
          card="card"
          placeholder="Visa"
          className="card-type-input"
        />
        <IoIosArrowDown className="billing-down-arrow" />
      </div>
      <div className="card-details-field">
        <div className="card-details">
          <h3>Card details</h3>
          <div className="card-details-asterisk">*</div>
        </div>
        <input
          type="text"
          details="details"
          placeholder="44960 44960 44960 44960"
          className="card-details-input"
        />
      </div>
      <div className="expiry-date-field">
        <div className="expiry-date">
          <h3>Expiry date</h3>
          <div className="expiry-date-asterisk">*</div>
        </div>
        <input
          type="text"
          state="state"
          placeholder="04 / 23"
          className="expiry-date-input"
        />
      </div>
      <div className="cvv-field">
        <div className="cvv">
          <h3>CVV</h3>
          <div className="cvv-asterisk">*</div>
        </div>
        <input
          type="text"
          code="code"
          placeholder="923"
          className="cvv-input"
        />
      </div>
      <div className="billing-bottom">
        <Link to="/purchase-details">
          <button className="billing-button">Next</button>
        </Link>
        <Link to="/" className="cancel-link">
          <div className="billing-cancel">Cancel Payment</div>
        </Link>
      </div>
    </div>
  );
};

export default Billing;
