import React from 'react'
import axios from 'axios';

const DisplaySurvey = () => {


  return (
    <div className='display-survey'>
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
      </div>
    </div>
  )
}

export default DisplaySurvey
