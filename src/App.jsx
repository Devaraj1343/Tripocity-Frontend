
import './App.css'
import MainLayout from './MainLayout'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 dark:text-text-dark text-text-light'>
      <Routes>
        <Route element={<MainLayout/>}>
         <Route path='/' element={<Home/>} />
        </Route>
         <Route path='/login' element={<Login/>}/>
         <Route path='/sign-up' element={<Signup/>}/>
      </Routes>
    </div>
  )
}

export default App
