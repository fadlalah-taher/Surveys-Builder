import React from 'react';
import { useState } from "react";
import axios from 'axios';

const AddQuestion = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  console.log("fadel add");
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   if (!name) {
  //     console.log('fill');
  //     return;
  //   }
  //   //onAdd({ name, email, password});
  //   console.log(name);
  //   console.log(option);
  //   console.log(localStorage.getItem("survey_id"));
  // };
  const onSubmit = async (e) => {
    e.preventDefault();
    let survey_id = localStorage.getItem("survey_id")
    let titleItem = {name, type, survey_id};
    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/api/v1/admin/addquestion',
      data: titleItem,
    })
    .then(function (response) {
        console.log(response);
        console.log("added");
    }).catch(function(response){
      console.log(response);
    })
  };

  return (
    <div>
      <div>
        <h1 id="header">Add Question</h1>
        <div className="form-control">
            <input
             type="text" 
             value={name}
             placeholder="Add Question" 
             onChange={(e) => {
              setName(e.target.value);
            }}
            />
            <input type={"submit"} value="Add Question" onClick={onSubmit} className="btn btn-block" />
        </div>
        <select value={type} onChange={(e) => {setType(e.target.value)}}>
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
            <option value="dropdown">MCQ</option>
        </select>
      </div>
    </div>
  )
}

export default AddQuestion
