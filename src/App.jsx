import "./App.css";
import MainLayout from "./MainLayout";
import Home from "./Pages/Home";
import Login from "./Pages/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Package from "./Pages/package";
import Toaster from "./Components/Toaster";
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  const clientId = "33639560986-hlb464eb8jqvi2bq3hpq6nehd0bvubg2.apps.googleusercontent.com";
  console.log("Google Client ID:", clientId);
  

  return (
     <GoogleOAuthProvider clientId={clientId}>
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
    </GoogleOAuthProvider>
  );
}

export default App;
