<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnswerController extends Controller
{
    public function getAnswersByQuestionId(Request $request){
        $id = $request->question_id;
        $answers = Answer::where('question_id', id)->get();

        return response()->json([
            "success" => true,
            "items" => $answers
        ], 200);
    }
}
