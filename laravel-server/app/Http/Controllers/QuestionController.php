<?php

namespace App\Http\Controllers;

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
            "items" => $question
        ], 200);
    }
}
