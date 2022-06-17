<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OptionController extends Controller
{
    public function getOptionsByQuestionId(Request $request){
        $id = $request->question_id;
        $options = Option::where('question_id', id)->get();

        return response()->json([
            "success" => true,
            "items" => $options
        ], 200);
    }
}
