import React from 'react'
import { useState, useEffect} from 'react';

const AddSurvey = () => {
    const [title , setTitle] = useState("");

    //const [password , setPwd] = useState("");
     //Adding a Survey
  const addSurvey = async (e) => {
    e.preventDefault();
    let titleItem = {title};
    const res = await fetch("http://127.0.0.1:8000/api/v1/admin/addsurvey", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(titleItem),
    }).catch(function(error) {  

      console.log('Request failed', error)  
    })
    const data = await res.json();
    console.log(data);
    localStorage.setItem("survey_id", data['items']['id']);
    console.log(data['items']['id']);
    
    //setUsers([...users, data]);
  };
  return (
    <div className='right-container'>
      <form className="add-form" onSubmit={addSurvey}>
        <h1>Add Survey</h1>
        <div className="form-control">
          <input
            type="text"
            placeholder={"Title"}
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <input type={"submit"} value="Add" className="btn btn-block" />
        <div className='divider'/>
      </form>
    </div>
  )
}

export default AddSurvey
