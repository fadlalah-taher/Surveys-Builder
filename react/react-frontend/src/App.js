import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

import Login from './components/Login';
import Register from './components/Register'
import Nav from './components/Nav';
import DisplaySurvey from './components/DisplaySurvey';
import AddSurvey from './components/AddSurvey';
import AddQuestion from './components/AddQuestion';
import Survey from './components/Survey';
import AddOptions from './components/AddOptions';
import QuestionContainer from './components/QuestionContainer';

function App() {

  // Initialize State
  const [surveys, setSurveys] = useState([]);


  // Initialize all tasks into state from backend at component load
  useEffect(() => {
    const getSurveys = async () => {
      const surveyssFromServer = await fetchSurveys();
      setSurveys(surveyssFromServer);
    };
    getSurveys();
  }, []);

  //Fetch All Tasks from Backend
  const fetchSurveys = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/v1/getsurveys");
      const data = await res.json();
      return data.survey;
      
    } catch (err) {
      console.log(err);
    }
  };

  //Adding User
  const addUser = async (e) => {
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/register',
      data: e,
    })
    .then(function (response) {
        window.location = "/";
    }).catch(function(response){
      //console.log(response);
    })    
  };

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/' element={<><Login /></>}> </Route>
        <Route path='/Register'element={<><Register onAdd={addUser}/></>}> </Route>
        <Route path='/AddSurvey' element={<><AddSurvey/></>}></Route>
        <Route path='/DisplaySurvey' element={<><DisplaySurvey surveys={surveys} /></>}></Route>
        <Route path='/AddQuestion' element={<AddQuestion/>}></Route>
        <Route path='/Survey' element={<Survey/>}></Route>
        <Route path='/addoptions' element={<AddOptions/>}></Route>
        <Route path='/QuestionContainer' element={<QuestionContainer/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
