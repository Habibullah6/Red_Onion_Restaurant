
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route  path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route path="*" element={<NotFound/>}/>
        
      </Routes>
     </div>
  );
}

export default App;
