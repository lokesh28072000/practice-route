import {React} from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import { Home } from './pages/home';
import {Contact} from './pages/contact';
import {About} from './pages/about';





function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
       <Route path='/home' element={<Home/>} /> 
       <Route path='/contact' element={<Contact/>} /> 
       <Route path='/about' element={<About/>} /> 
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}


export default App;
