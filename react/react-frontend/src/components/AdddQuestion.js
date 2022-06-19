import React from 'react';
// import { useState } from "react";
import axios from 'axios';

const AdddQuestion = () => {
//   const [name, setName] = useState("");
//   const [type, setType] = useState("");
 var sId = localStorage.getItem("survey_id");
console.log("fadel addd");
 var type_select = document.getElementById("question_type");
 function typeSelected(){
    console.log(type_select.value);
 }
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

  async function submitQuestion(){
    //let survey_id = localStorage.getItem("survey_id")
    //let titleItem = {name, type, survey_id};
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
                            window.location = '/Survey';
                        }

                    }
                })
        }catch(err){
            console.log(err);
        }
    }
//     axios({
//       method: 'post',
//       url: 'http://127.0.0.1:8000/api/v1/admin/addquestion',
//       data: titleItem,
//     })
//     .then(function (response) {
//         console.log(response);
//         console.log("added");
//     }).catch(function(response){
//       console.log(response);
//     })
//   };
  }
return (
<div>
    <div>
    <h1 id="header">Add Question</h1>
    <div className="form-control">
        <input
            type="text" 
        //  value={name}
            id ="question_title"
            placeholder="Add Question" 
        //  onChange={(e) => {
        //   setName(e.target.value);
        // }}
        />
        {/* <input type={"submit"} value="Add Question" onClick={submitQuestion()} className="btn btn-block" /> */}
    </div>
    <select id='question_type'  onChange={() => {typeSelected()}}>
        <option value="text">Text</option>
        <option value="checkbox">Checkbox</option>
        <option value="mcq">MCQ</option>
    </select>
    </div>
    <button onClick={()=>{submitQuestion()}}>submit</button>
</div>
)
}

export default AdddQuestion