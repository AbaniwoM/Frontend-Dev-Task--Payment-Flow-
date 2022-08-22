import React, { useState } from "react";
import { makeStyles, Modal, Container, Typography } from "@material-ui/core";
import "./PurchaseDetails.scss";
import { Link } from "react-router-dom";
import { TiTick } from "react-icons/ti";

const useStyles = makeStyles((theme) => ({
  container: {
    width: 680,
    height: 508,
    background: "white",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    paddingTop: "130px",
    borderRadius: "10px",
    flexDirection: "column",
    top: 29,
    bottom: 0,
    right: 0,
    left: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  correct: {
    color: "#6FCF97",
    fontSize: "3rem",
    borderRadius: "50%",
    boxShadow: "0px 6px 10px rgba(33, 30, 67, 0.08)",
  },
  complete: {
    marginTop: "5px",
    fontSize: "2rem",
    fontWeight: 700,
    color: "#4E598C",
  },
  check: {
    fontSize: "0.75rem",
    width: "40%",
    marginRight: "67px",
    marginTop: "15px",
    fontWeight: 400,
    color: "#4F4F4F",
  },
  returnHome: {
    marginTop: "25px",
    marginRight: "233px",
    color: "#F2994A",
    fontWeight: 400,
  },
}));

const PurchaseDetails = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <div className="cover">
        <div className="purchase-info">Billing Info</div>
        <div className="purchase-line-two"></div>
        <div className="card">
          <div className="head">
            <div className="name">Item Name</div>
            <div className="price">₦ Price</div>
          </div>
          <div className="body">
            <div className="row1">
              <div className="data">Data science and usability</div>
              <div className="cost">50,000.00</div>
            </div>
            <div className="row2">
              <div className="ship">Shipping</div>
              <div className="figure">0.00</div>
            </div>
            <div className="line"></div>
            <div className="total">
              <div className="letter">Total</div>
              <div className="number">50,000.00</div>
            </div>
          </div>
        </div>
        <div className="purchase-bottom">
          <button className="purchase-button" onClick={() => setOpen(true)}>
            Pay
          </button>
          <Link to="/" className="cancel-link">
            <div className="purchase-cancel">Cancel Payment</div>
          </Link>
        </div>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Container className={classes.container}>
          <div>
            <TiTick className={classes.correct} />
          </div>
          <Typography className={classes.complete}>
            Purchase Completed
          </Typography>
          <Typography className={classes.check}>
            Please check your email for details concerning this transaction
          </Typography>
          <Link to="/" className="cancel-link">
            <div className={classes.returnHome}>Return Home</div>
          </Link>
        </Container>
      </Modal>
    </div>
  );
};

export default PurchaseDetails;
