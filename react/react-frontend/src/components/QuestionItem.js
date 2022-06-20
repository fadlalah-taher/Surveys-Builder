import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionItem = ({text, question_id, type}) => {

    const [options, setOptions] = useState("");
    const fetchOptions = async () => {
        // Display Options
        try{
            await axios.post(`http://127.0.0.1:8000/api/v1/getoptions`,{question_id: question_id})
            .then(res =>{
                const mydata = res.data;
                setOptions(mydata['options']);
            })
        } catch(err){
            console.log(err);
        }
    }

     useEffect(() => {
        fetchOptions();
    }, []);


    if(type === "mcq"){
        document.getElementById('answer_btn').addEventListener("click", async function () {
            var mcqs = document.getElementsByName('q' + question_id);
            for (var x of mcqs) {
                if (x.checked) {
                     console.log(x.checked)
                     console.log(x.value)
                    try {
                        await axios.post(`http://127.0.0.1:8000/api/v1/addanswer`, {
                            question_id: question_id,
                            text: x.value
                        })
                        .then(res => {
                            console.log("mcq added");
                        })
                    } catch (err) {
                         console.log(err)
                    }
                }
            }
        })

        try{
            return(
                <div className='question-item'>
                    <p className='question-title'>{text}</p>
                    <div className={'radio-group'}>
                        {options.map((value, index) => {
                            return(
                            <span key={index}>
                                <input type="radio" value={value['name']} name={'q' + question_id} className={'radio-check'}></input>
                                {value['name']}
                            </span>
                            )
                        })}
                    </div>
                </div>
            );
        }catch(err){
            return (<div className='question-item'>MCQ Loading.....</div>)
        }
    }
    if(type === "text"){
        document.getElementById('answer_btn').addEventListener("click", async function () {
            // console.log(question_id)
            var text_ansr = document.getElementById('q' + question_id).value;
             console.log(text_ansr)
            try {
                await axios.post(`http://127.0.0.1:8000/api/v1/addanswer`, {
                    question_id: question_id,
                    text: text_ansr
                })
                .then(res => {
                    console.log("text added");
                })
            } catch (err) {
                 console.log(err)
            }


        })


        return(
            <div className='question-item'>
                <div className='question-content'>
                    <p className='question-title'>{text}</p>
                    <input type={"text"} className={'text-input'} id={'q' + question_id}></input>
                </div>
            </div>
        );
    }
    if(type === 'checkbox'){
        document.getElementById('answer_btn').addEventListener("click", async function () {
            // console.log(question_id)
            var chbs = document.getElementsByName('q' + question_id);
            for (var x of chbs) {
                if (x.checked) {
                     console.log(x.value);
                     console.log(x.name);
                    try {
                        await axios.post(`http://127.0.0.1:8000/api/v1/addanswer`, {
                            question_id: question_id,
                            text: x.value
                        })
                        .then(res => {
                            console.log("checkbox added");
                        })
                    } catch (err) {
                         console.log(err)
                    }
                }
            }
        })



        try{
            return(
                <div className='question-item'>
                    <p className='question-title'>{text}</p>
                    <div className={'checkbox-group'}>
                        {options.map((value, index) => {
                            return(
                            <span key={index}>
                                <input type="checkbox" value={value['name']} name={'q' + question_id} className={'radio-check'}></input>
                                {value['name']}
                            </span>
                            )
                        })}
                    </div>
                </div>
            );
        }catch(err){
            return (<div className=''>CheckBox Loading .......</div>)
        }
    } 
}

export default QuestionItem
