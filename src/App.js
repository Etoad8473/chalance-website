import './styles/App.css';
import { Home } from './pages/Home';
import { Test } from './pages/Test';
import {Results} from './pages/Results';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/test' element={<Test/>}/>
        <Route path='/test/result' element={<Results/>}/>
      </Routes>
    </Router>
  );
}

export default App;