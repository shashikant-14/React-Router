import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import About from './components/About'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <ul>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
          </ul>
        </nav>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
