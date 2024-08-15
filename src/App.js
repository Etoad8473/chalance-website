import './styles/App.css';
import { Home } from './pages/Home';
import { Test } from './pages/Test';
import {About} from './pages/About';
import Products from './pages/Products';
import Blog from './pages/Blog';
import {Results} from './pages/Results';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { QuestionContext, QuestionProvider } from './contexts/QuestionContext';

function App() {
  return (
    <QuestionProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/test' element={<Test/>}/>
          {/* <Route path='/test/result' element={<Results/>}/> */}
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/blog' element={<Blog/>}/>
        </Routes>
      </Router>
    </QuestionProvider>
  );
}

export default App;