import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from './components/Login';
import Register from './components/Register'
import Nav from './components/Nav';
import axios from 'axios';
import DisplaySurvey from './components/DisplaySurvey';
import { useState, useEffect } from "react";
import AddSurvey from './components/AddSurvey';

//import Register from './components/Register';

function App() {

   // Initialize State
   //const [users, setUsers] = useState([]);
   // Initialize State
  const [surveys, setSurveys] = useState([]);

  // Initialize all tasks into state from backend at component load
  useEffect(() => {
    const getTasks = async () => {
      const surveyssFromServer = await fetchTasks();
      console.log(surveyssFromServer);
      setSurveys(surveyssFromServer);
    };
    getTasks();
  }, []);

  //Fetch All Tasks from Backend
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/getsurveys");
      const data = await res.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  //Adding a Task
  const addTask = async (e) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/register',
      data: e,
    })
    .then(function (response) {
        console.log(response);
    }).catch(function(response){
      console.log(response);
    })    
    // setUsers([...users, data]);
  };

  return (
    <BrowserRouter>
    {/* <div> */}
    <Nav/>
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
        <Route
        path='/AddSurvey'
        element={
          <>
          <AddSurvey/>
          </>
        }
        >

        </Route>
        <Route
        path='/DisplaySurvey'
        element={
          <>
          <DisplaySurvey/>
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
