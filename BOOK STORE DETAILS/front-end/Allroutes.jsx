 
import { Route, Routes } from 'react-router-dom'
import Home from './src/Pages/Home'
import About from './src/Pages/About'
import Books from './src/Pages/Books'
import NavBaar from './src/components/Navbaar'
 

function AllRoutes() {
  return (
    <>
             <NavBaar /> 
    <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/list' element={<Books />}/>
    </Routes>
    </>
  )
}

export default AllRoutes