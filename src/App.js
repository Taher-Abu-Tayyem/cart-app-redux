import logo from './logo.svg';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { Route, Routes } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <AppNavbar/>
      <Routes>
      <Route path='/' element={<><p>HOME</p></>}/>
      <Route path='/Products' element={<Products/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
