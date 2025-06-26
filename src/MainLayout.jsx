// MainLayout.jsx

import { Outlet } from 'react-router-dom';
import Topbar from './Components/Top-Bar';
import Footer from "./Components/Footer";

const MainLayout = () => (
  <>
    <Topbar/>   
    <Outlet />
  </>
);
export default MainLayout;