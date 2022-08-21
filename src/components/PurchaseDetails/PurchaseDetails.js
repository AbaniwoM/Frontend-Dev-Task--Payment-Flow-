import React from 'react';
import "./PurchaseDetails.scss";
import { Link } from "react-router-dom";

const PurchaseDetails = () => {
  return (
    <div>
      <div className="cover">
        <div className="purchase-info">Billing Info</div>
        <div className="purchase-line-two"></div>
        <div className="purchase-bottom">
          <Link to="/purchase-details">
            <button className="purchase-button">Pay</button>
          </Link>
          <Link to="/" className="cancel-link">
            <div className="purchase-cancel">Cancel Payment</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PurchaseDetails