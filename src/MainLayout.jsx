// MainLayout.jsx

import { Outlet } from 'react-router-dom';
import Topbar from './Components/Top-Bar';
import Footer from "./Components/Footer";
import EnquireNow from './Components/EnquireNow';

const MainLayout = () => (
  <div className='relative'>
    <Topbar/>   
    <Outlet />
    <EnquireNow />
  </div>



);
export default MainLayout;