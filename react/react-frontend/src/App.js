import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Login/>
    </div>
    </BrowserRouter>
  );
}

export default App;
