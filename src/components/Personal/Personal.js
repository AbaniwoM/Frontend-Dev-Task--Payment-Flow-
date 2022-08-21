import React from 'react';
import "./Personal.scss";
import {IoIosArrowDown} from "react-icons/io";
import { Link } from "react-router-dom";

const Personal = () => {
  return (
    <div className="cover">
      <div className="personal-info">Personal Info</div>
      <div className="line-one"></div>
      <div className="name-field">
        <h3>Name</h3>
        <input
          type="text"
          name="name"
          placeholder="Opara Linus Ahmed"
          className="name-input"
        />
      </div>
      <div className="email-field">
        <div className="email">
          <h3>Email Address</h3>
          <div className="asterisk">*</div>
        </div>
        <h5>The purchase receipt would be sent to this address</h5>
        <input
          type="text"
          email="email"
          placeholder="OparaLinusAhmed@devmail.com"
          className="email-input"
        />
      </div>
      <div className="address-one-field">
        <div className="address-one">
          <h3>Address 1</h3>
        </div>
        <input
          type="text"
          address="address"
          placeholder="The address of the user goes here"
          className="address-one-input"
        />
      </div>
      <div className="address-two-field">
        <div className="address-two">
          <h3>Address 2</h3>
        </div>
        <input
          type="text"
          address="address"
          placeholder="and here"
          className="address-two-input"
        />
      </div>
      <div className="local-government-field">
        <div className="local-government">
          <h3>Local Government</h3>
        </div>
        <input
          type="text"
          location="location"
          placeholder="Surulere"
          className="local-government-input"
        />
      </div>
      <div className="state-field">
        <div className="state">
          <h3>State</h3>
        </div>
        <input
          type="text"
          state="state"
          placeholder="Lagos"
          className="state-input"
        />
        <IoIosArrowDown className="down-arrow" />
      </div>
      <div className="bottom">
        <Link to="/billing">
          <button className="button">Next</button>
        </Link>
        <div className="cancel">Cancel Payment</div>
      </div>
    </div>
  );
}

export default Personal