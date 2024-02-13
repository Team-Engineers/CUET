
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Payment from './pages/Payment';

function App() {
  const packname ="CUET GENERAL PACK";
  const packprice =999;
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/payment" element={<Payment packname ={packname} packprice={packprice}/>} />
    </Routes>
    </Router>
  );
}

export default App;
