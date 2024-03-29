import axios from 'axios';
import React from 'react'

import { GoDiffAdded } from "react-icons/go";
const AddOptions = () => {
    var qId = localStorage.getItem("question_id");

    async function submitOption(){
        var text = document.getElementById("option_text").value;
        if(text === ""){
            alert("Enter Option");
        }
        else{
            try{
                await axios.post(`http://127.0.0.1:8000/api/v1/admin/addoption`, {
                    name: text,
                    question_id: qId,
                })
                    .then(res => {
                        const mydata = res.data;
                        if(mydata['success']){
                            document.getElementById('option_text').value = "";
                        }
                    })
            } catch(err){
                console.log(err);
            }
        }
    }

  return (
    <div className='body'>
        <div className='right-container-option'>
            <p className='option-title'>Add Option</p>
            <div className="form-control">
                <span className='icon'><GoDiffAdded/></span> 
                <input type={"text"} id="option_text" placeholder='Add an option'></input>
            </div>
            <button className='btn' onClick={()=>{submitOption()}}>Add Option</button>
            <button className='btn btn-option' onClick={()=>{ window.location="/AddQuestion"}}>Submit</button>
        </div>
    </div>

  )
}

export default AddOptions
