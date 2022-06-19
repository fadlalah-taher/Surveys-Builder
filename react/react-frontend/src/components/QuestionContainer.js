import axios from 'axios';
import React, { useEffect, useState } from 'react'

const QuestionContainer = () => {
    var sId = localStorage.getItem("survey_id");
    console.log(sId);
    const [question, setQuestion] = useState('');
    const fetchQuestions = async () => {
        try{
            await axios.post(`http://127.0.0.1:8000/api/v1/getquestions`, {
                survey_id: sId,
                
            })
                .then(res => {
                    const mydata = res.data;
                    console.log(mydata);
                    setQuestion(mydata['questions']);
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
                <QuestionItem key={index} text={value['question']} question_id={value['id']} type={value['type']}/>
            )
        })
        }
      
    </div>
  );
}catch(err){
   return (<div>loading...</div>)
}
}

export default QuestionContainer
