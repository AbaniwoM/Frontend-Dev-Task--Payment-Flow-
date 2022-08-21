import Homepage from './components/Home/Homepage';
import { Route, Routes } from "react-router-dom";
import Personal from './components/Personal/Personal';
import Billing from './components/Billing/Billing';
import ConfirmPayment from './components/ConfirmPayment/ConfirmPayment';

function App() {
  return (
    <div className="App">
      <Homepage />
      <div className="container">
        <Routes>
          <Route path="/" element={<Personal />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/confirm-payment" element={<ConfirmPayment />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
