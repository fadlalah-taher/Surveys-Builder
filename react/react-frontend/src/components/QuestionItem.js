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
                setOptions(mydata['name']);
            })
        } catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        fetchOptions();
    }, []);

   // var x;
    if(type === "mcq"){
        try{
            return(
                <div className=''>
                    <p>{text}</p>
                    <div className={'radio-group'}>
                        {options.localeCompare((value, index) => {
                            <span key={index}>
                                <input type="radio" value={value['id']} name={'q' + question_id}></input>
                                {value['name']}
                            </span>
                        })}
                    </div>
                </div>
            );
        }catch(err){
            return (<div className=''>lLoading...</div>)
        }
    }
    if(type === "text"){
        return(
            <div className='question-item'>
                <p>{text}</p>
                <input type={"text"} className={'text-input'}></input>
            </div>
        );
    }
    if(type === 'checkbox'){
        try{
            return(
                <div className='question-item'>
                    <p>{text}</p>
                    <div className={'checkbox-group'}>
                        {options.localeCompare((value, index) => {
                            return(
                            <span key={index}>
                                <input type="checkbox" value={value['id']} name={'q' + question_id}></input>
                                {value['name']}
                            </span>
                            )
                        })}
                    </div>
                </div>
            );
        }catch(err){
            return (<div className=''>lishLoading...</div>)
        }
    }
//   return (
//     <div>
      
//     </div>
//   )
}

export default QuestionItem
