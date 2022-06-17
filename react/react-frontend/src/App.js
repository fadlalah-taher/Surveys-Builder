import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register'
import { useState } from "react";
//import Register from './components/Register';

function App() {

   // Initialize State
   const [users, setUsers] = useState([]);

  //Adding a Task
  const addTask = async (e) => {
    const res = await fetch("http://127.0.0.1:8000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(e),
    });
    const data = await res.json();
    console.log(data);
    
    setUsers([...users, data]);
  };

  return (
    <BrowserRouter>
    {/* <div> */}
      <Routes>
        <Route
        path='/'
        element={
          <>
          <Login />
          {/* addTask={addTask} */}
          </>
        }
        > 
        </Route>
        <Route
        path='/Register'
        element={
          <>
          <Register onAdd={addTask} />
          </>
        }
        >
        </Route>


      </Routes>
    
    {/* <Register onAdd={addTask} /> */}
      
    {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
