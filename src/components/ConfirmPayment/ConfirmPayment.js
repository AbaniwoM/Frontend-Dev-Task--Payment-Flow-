import React from 'react';
import { Link } from "react-router-dom";
import "./ConfirmPayment.scss";


const ConfirmPayment = () => {
  return (
    <div className="wrap">
      <div className="purchase">Purchase Completed!</div>
      <Link to="/" className="cancel-link">
        <div className="returnHome">Return Home</div>
      </Link>
    </div>
  );
}

export default ConfirmPayment