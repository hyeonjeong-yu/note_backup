import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import ShowMain from './pages/ShowMain.js';
import CreateNote from './pages/CreateNote.js';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ShowMain/>} />
        <Route path="/create" element={<CreateNote/>} />
        <Route path={"/:mode/:id"} element={<CreateNote/>} />
        <Route path="*" element={<div>404 ERROR</div>} />
      </Routes>


    </div>
  );
}

export default App;
