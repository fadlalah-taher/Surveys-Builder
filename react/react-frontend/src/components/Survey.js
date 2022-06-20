import React from 'react'
import axios from 'axios';
import {useState, useEffect } from "react";


import QuestionContainer from './QuestionContainer';

const Survey = ({text, id}) => {

  var sId = localStorage.getItem("survey_id");
  const [survey, setSurvey] = useState('');

  const fetchSurvey = async () => {

    try {
        // get the survey to show title
        await axios.post(`http://127.0.0.1:8000/api/v1/getsurvey`, {
            survey_id: sId,
        })
            .then(res => {
                const mydata = res.data;
                setSurvey(mydata['survey']['title']);
            })

    } catch (err) {
        // console.log(err)
    }

}

useEffect(() => {
    fetchSurvey();
}, []);
  

  return (
    <div className='Survey'>
      <QuestionContainer />
      <div className='btn-container'>
          <button className='btn' id="answer_btn">Submit</button>
      </div>
    </div>
  )
}

export default Survey
