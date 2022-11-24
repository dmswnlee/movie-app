import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Root from './pages/Root';
import Home from './pages/Home';
import About from './pages/About';
import Detail from './pages/Detail';
import NotFound from './pages/NotFound';

function App() {

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Root />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
