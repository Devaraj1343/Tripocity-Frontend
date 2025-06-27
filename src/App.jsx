import "./App.css";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Signup from "./Pages/signup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </Router> 
      {/* <Footer /> */}
    </div>
  );
}

export default App;
