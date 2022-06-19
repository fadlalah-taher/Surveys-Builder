import React from 'react'

const DisplaySurvey = ({surveys}) => {

  function redirectSurvey (sId) {
    localStorage.setItem("survey_id", sId);
    window.location="/QuestionContainer";
  };
  
  return (
    <div className='display-survey'>
      {surveys.map((survey, index) => (
        
        <div className='survey-card'>
            <div className='title-survey'>
                <p>{survey.title}</p>
            </div>
            <div>
                <input type={"submit"} key={index} value="Start" onClick={() => redirectSurvey(survey.id)}  className="btn btn--survey" />
            </div>
        </div>
      ))}
    </div>
  )
}

export default DisplaySurvey


