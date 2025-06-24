// MainLayout.jsx

import { Outlet } from 'react-router-dom';
import Topbar from './Components/Top-Bar';

const MainLayout = () => (
  <>
    <Topbar/>
    <Outlet />
  </>
);
export default MainLayout;