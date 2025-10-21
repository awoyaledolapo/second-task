import {  Route, Routes } from 'react-router-dom'
import Form from '../pages/ContactUs'
import AboutUs from '../pages/AboutUs'
import Stage0 from '../pages/Stage0'
import './App.css'
import Navbar from './component/NavBar'

function App() {
 
  return (
  
<div className=''>
    <Navbar/>
      <Routes>
         <Route path='/' element={<Stage0/>}/>
        <Route path='/contact' element={<Form/>}/>
        <Route path='/about' element={<AboutUs/>}/>
      </Routes>
   </div>
  )
}

export default App
