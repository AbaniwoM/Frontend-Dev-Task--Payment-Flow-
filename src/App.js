import Homepage from './components/Home/Homepage';
import { Route, Routes } from "react-router-dom";
import Personal from './components/Personal/Personal';
import Billing from './components/Billing/Billing';
import ConfirmPayment from './components/ConfirmPayment/ConfirmPayment';
import PurchaseDetails from './components/PurchaseDetails/PurchaseDetails';

function App() {
  return (
    <div className="App">
      <Homepage />
      <div className="container">
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/confirm-payment" element={<ConfirmPayment />} />
          <Route path="/purchase-details" element={<PurchaseDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
