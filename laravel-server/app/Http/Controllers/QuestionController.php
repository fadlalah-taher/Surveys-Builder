<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    public function addQuestion(Request $request){
        $question = new Question;
        $question->name = $request->name;
        $question->survey_id = $request->survey_id;
        $question->type = $request->type;
        $question->save();

        return response()->json([
            "success" => true,
            "question" => $question
        ], 200);
    }

    public function getQuestionBySurveyId(Request $request){
        $id = $request->survey_id;
        $question = Question::where('survey_id', $id)->get();

        return response()->json([
            "success" => true,
            "question" => $question
        ], 200);
    }
}
