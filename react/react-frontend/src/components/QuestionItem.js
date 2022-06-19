import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const QuestionItem = ({text, question_id, type}) => {
    console.log(question_id);
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
        try{
            return(
                <div className='question-item'>
                    <p className='question-title'>{text}</p>
                    <div className={'radio-group'}>
                        {options.map((value, index) => {
                            return(
                            <span key={index}>
                                <input type="radio" value={value['id']} name={'q' + question_id} className={'radio-check'}></input>
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
        return(
            <div className='question-item'>
                <div className='question-content'>
                    <p className='question-title'>{text}</p>
                    <input type={"text"} className={'text-input'}></input>
                </div>
            </div>
        );
    }
    if(type === 'checkbox'){
        try{
            return(
                <div className='question-item'>
                    <p className='question-title'>{text}</p>
                    <div className={'checkbox-group'}>
                        {options.map((value, index) => {
                            return(
                            <span key={index}>
                                <input type="checkbox" value={value['id']} name={'q' + question_id} className={'radio-check'}></input>
                                {value['name']}
                            </span>
                            )
                        })}
                    </div>
                </div>
            );
        }catch(err){
            console.log(err);
            return (<div className=''>CheckBox Loading .......</div>)
        }
    }
}

export default QuestionItem
