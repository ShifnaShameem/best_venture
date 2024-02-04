import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import Auth from './pages/Auth'
import Travel from './pages/Travel'
import Whishlist from './pages/Whishlist'
import Cart from './pages/Cart'
import Review from './pages/Review'
import Payment from './pages/Payment'
import View from './pages/View'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Auth/>}></Route>
      <Route path='/register' element={<Auth insideRegister/>}></Route>
      <Route path='/travel' element={<Travel/>}></Route>
      <Route path='/whishlist' element={<Whishlist/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/review' element={<Review/>}></Route>
      <Route path='/payment' element={<Payment/>}></Route> 
      <Route path='/view' element={<View/>}></Route> 





     </Routes>
     <Footer></Footer>
    </>
  )
}

export default App
