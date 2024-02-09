import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login/Login";
import Signup from "./Component/Signup/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
      </Routes>
    </div>
  );
}

export default App;
