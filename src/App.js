
import './App.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/profile" element={<Profile />} />

    </Routes>
    </Router>
    
  );
}

export default App;
