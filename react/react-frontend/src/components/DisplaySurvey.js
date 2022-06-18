import React from 'react'
import axios from 'axios';

const DisplaySurvey = ({surveys}) => {


  return (
    <div className='display-survey'>
      {surveys.map((survey) => (
        <div className='survey-card'>
        <div className='title-survey'>
            <p>Hello word</p>
        </div>
        <div>
            <input type={"submit"} value="Start" className="btn btn--survey" />
        </div>
      </div>
        // <Task
        //   key={survey.id}
        //   task={survey}
        // //   onDelete={onDelete}
        // //   onToggle={onToggle}
        // />
      ))}
    </div>
  )
}

export default DisplaySurvey

{/* <div className='survey-card'>
        <div className='title-survey'>
            <p>Hello word</p>
        </div>
        <div>
            <input type={"submit"} value="Start" className="btn btn--survey" />
        </div>
      </div>
      <div className='survey-card'>
        <div className='title-survey'>
            <p>Hello word</p>
        </div>
        <div>
            <input type={"submit"} value="Start" className="btn btn--survey" />
        </div>
      </div>
      <div className='survey-card'>
        <div className='title-survey'>
            <p>Hello word</p>
        </div>
        <div>
            <input type={"submit"} value="Start" className="btn btn--survey" />
        </div>
      </div>
      <div className='survey-card'>
        <div className='title-survey'>
            Hello
        </div>
        <div>
            <input type={"submit"} value="Start" className="btn btn--survey" />
        </div>
      </div> */}
