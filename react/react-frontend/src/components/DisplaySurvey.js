import React from 'react'
import { useState} from 'react';
import { Link, useLinkClickHandler } from 'react-router-dom';
//import axios from 'axios';

const DisplaySurvey = ({surveys}) => {
  //const [id , setId] = useState("");

  function redirectSurvey (sId) {
    localStorage.setItem("survey_id", sId);
    window.location="/Survey";
  };
  return (
    <div className='display-survey'>
    {/* <> */}
      {surveys.map((survey, index) => (
        
        <div className='survey-card'>
            <div className='title-survey'>
                <p>{survey.title}</p>
                {/* <p>{survey.id}</p> */}
            </div>
            <div>
              {/* {localStorage.setItem("survey_id",survey.id)} */}
                <input type={"submit"} key={index} value="Start" onClick={() => redirectSurvey(survey.id)}  className="btn btn--survey" />
            </div>
        </div>
      ))}
      {/* </> */}
    </div>
  )
}

export default DisplaySurvey


