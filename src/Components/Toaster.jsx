
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useTheme } from '../contexts/Themecontext'; // Adjust the import path as necessary

function Toaster() {
   
     const { isLightTheme } = useTheme();
        
  return (  
    <>
      {/* Your App */}
      <ToastContainer
        position="bottom-right" // 👈 default position
        autoClose={3000} // 👈 auto close after 3 sec
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable   
        pauseOnHover
        theme={isLightTheme ? "light" : "dark"}// or "dark" / "colored"
      />
    </>
  );
}

export default Toaster;
