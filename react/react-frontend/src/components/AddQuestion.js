import React from 'react';
//import { useState } from "react";
import axios from 'axios';

const AddQuestion = () => {
 //const [name, setName] = useState("");
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
                            q ="";
                            //setName=("");
                            console.log("add");
                            //window.location = '/Survey';
                        }

                    }
                })
        }catch(err){
            console.log(err);
        }
    }

  }
return (
<div className='form'>
    <div className='form-question'>
        <h1 id="header">Add Question</h1>
        <div className="form-control">
            <input
                type="text" 
                id ="question_title"
                placeholder="Add Question" 
            //     onChange={(e) => {
            //     setName(e.target.value);
            // }}
            />
        </div>
        <select id='question_type'   onChange={() => {typeSelected()}}>
            <option value="text">Text</option>
            <option value="checkbox">Checkbox</option>
            <option value="mcq">MCQ</option>
        </select>
    </div>  
    <button className='btn-submit' onClick={()=>{submitQuestion()}}>submit</button>
</div>
)
}

export default AddQuestion
