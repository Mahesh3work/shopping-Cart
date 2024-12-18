
import './App.css'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

function App() {
 

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/navbar' element={<Navbar/>} />
      </Routes>
    </Router>
  )
}

export default App
