import React from 'react';
import axios from 'axios';

import { GoDiffAdded } from "react-icons/go";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
const AddQuestion = () => {
 var sId = localStorage.getItem("survey_id");
 var type_select = document.getElementById("question_type");
 function typeSelected(){
    console.log(type_select.value);
 }

  async function submitQuestion(){
    var q = document.getElementById("question_title").value;
    if(q === ""){
        alert('Enter question')
    }else{
        try{
            await axios.post(`http://127.0.0.1:8000/api/v1/admin/addquestion`,{
                name: q,
                survey_id: sId,
                type: type_select.value,
            })
                .then(res =>{
                    const mydata = res.data;
                    if(mydata['success']){
                        if(type_select.value === "mcq" || type_select.value ==="checkbox"){
                            localStorage.setItem('question_id', mydata['question']['id']);
                            window.location = '/addoptions';
                        }
                        if(type_select.value === "text"){
                            console.log("added");
                        }

                    }
                })
        }catch(err){
            console.log(err);
        }
    }

  }
function  submitSurvey(){
    window.location = "/AddSurvey";
}
return (
    <div className='body'>
        <div className='form'>
            <div className='form-question'>
                <h1 id="header">Add Question</h1>
                <div className="form-control">
                <span className='icon'><GoDiffAdded/></span> 
                    <input
                        type="text" 
                        id ="question_title"
                        placeholder="Add Question" 
                    />
                </div>
                <div className="form-select">
                    <span className='icon-select'><BsFillArrowDownCircleFill/></span> 
                    <select id='question_type' className='select'   onChange={() => {typeSelected()}}>
                        <option value="text">Text</option>
                        <option value="checkbox">Checkbox</option>
                        <option value="mcq">MCQ</option>
                    </select>
                </div>
            </div>  
            <button className='btn-submit' onClick={()=>{submitQuestion()}}>Add</button>
            <button className='btn-submit surveyBtn' onClick={()=>{submitSurvey()}}>Submit Survey</button>
        </div>
    </div>
)
}

export default AddQuestion
