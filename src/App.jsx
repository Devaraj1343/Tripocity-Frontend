import "./App.css";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Package from "./Pages/package";
import Toaster from "./Components/Toaster";

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 ">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/packages/:region/:place" element={<Package />} />
          </Route>
        </Routes>
      </Router>
      <Toaster/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
