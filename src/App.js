
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Payment from './pages/Payment';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/payment" element={<Payment/>} />
    </Routes>
    </Router>
  );
}

export default App;
