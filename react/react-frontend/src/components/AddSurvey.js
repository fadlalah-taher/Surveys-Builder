import React from 'react'
import {useState} from 'react';
import axios from 'axios';
import { BsFillCalendar2MinusFill } from "react-icons/bs";

const AddSurvey = () => {
    const [title , setTitle] = useState("");
    const [field, setField] = useState(false);

     //Adding a Survey
  const addSurvey = async (e) => {
    e.preventDefault();
    let titleItem = {title};
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/admin/addsurvey',
      data: titleItem,
    })
    .then(function (response) {
        console.log(response);
        localStorage.setItem("survey_id", response.data['items']['id']);
        console.log(response.data['items']['id']);
        window.location = '/AddQuestion';
    }).catch(function(response){
      console.log(response);
      setField(true);
    })
  };

  return (
    <div className='body'>
      <div className='right-container'>
        <form className="add-form" onSubmit={addSurvey}>
          <h1>Add Survey</h1>
          <div className="form-control">
          <span className='icon'><BsFillCalendar2MinusFill/></span>  
            <input
              type="text"
              placeholder={"Title"}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          {field ? <div className='forget'>Fill the field!</div> : ""}
          <input type={"submit"} value="Add" className="btn btn-block" />
        </form>
      </div>
    </div>
  )
}

export default AddSurvey
