import axios from 'axios';
import React, { useEffect, useState } from 'react'
import QuestionItem from './QuestionItem';

const QuestionContainer = () => {
    var sId = localStorage.getItem("survey_id");
    console.log(sId);
    const [questions, setQuestion] = useState('');
    const fetchQuestions = async () => {
        try{
            await axios.post(`http://127.0.0.1:8000/api/v1/getquestions`, {
                survey_id: sId,
                
            })
                .then(res => {
                    const mydata = res.data;
                    setQuestion(mydata['question']);
                })
        } catch(err){
            console.log(err);
        }
    }

    useEffect(()=>{
        fetchQuestions();
    }, []);

    try{
  return (
    <div className='questions-container'>
        {questions.map((value, index)=>{
            return(
                <QuestionItem key={index} text={value['name']} question_id={value['id']} type={value['type']}/>
            )
        })
        }
      
    </div>
  );
}catch(err){
   return (<div>Loading.......</div>)
}
};

export default QuestionContainer;
