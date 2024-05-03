import './App.css';
import Home from'./pages/home/home';
import Fotos from './pages/Fotos/index'
import Contato from './components/contato/index';
import Comentarios from './pages/comentarios/index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Fotos' element={<Fotos />} />
        <Route path='/Contato' element={<Contato />} />
        <Route path='/Comentarios' element={<Comentarios />} />
      </Routes>
      </BrowserRouter>
    
    
  );
}

export default App;
