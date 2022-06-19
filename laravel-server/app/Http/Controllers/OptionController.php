<?php

namespace App\Http\Controllers;

use App\Models\Option;
use Illuminate\Http\Request;

class OptionController extends Controller
{
    public function addOption(Request $request){
        $option = new Option;
        $option->name = $request->name;
        $option->question_id = $request->question_id;
        $option->save();

        return response()->json([
            "success" => true,
        ], 200);
    }

    public function getOptionsByQuestionId(Request $request){
        $id = $request->question_id;
        $options = Option::where('question_id', $id)->get();

        return response()->json([
            "success" => true,
            "options" => $options
        ], 200);
    }
}
