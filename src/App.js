import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import './App.css';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Register from './pages/Register'


function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
