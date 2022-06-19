import React from 'react';
import { useState } from "react";

const AddQuestion = () => {
  const [name, setName] = useState("");
  const [option, setOption] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      console.log('fill');
      return;
    }
    //onAdd({ name, email, password});
    console.log(name);
    console.log(option);
    console.log(localStorage.getItem("survey_id"));
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
        <select value={option} onChange={(e) => {setOption(e.target.value)}}>
            <option value="">Choose a type</option>
            <option value="text">text</option>
            <option value="checkboxes">checkboxes</option>
            <option value="dropdown">dropdown</option>
            <option value="choices">choices</option>
            <option value="date">date</option>
        </select>
      </div>
    </div>
  )
}

export default AddQuestion
