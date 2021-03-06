<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function getSurveys(){
        $survey = Survey::all();

        return response()->json([
            "success" => true,
            "survey" => $survey
        ], 200);
    }

    public function getSurveyById(Request $request){
        $id = $request->survey_id;
        $survey = Survey::find($id);

        return response()->json([
            "success" => true,
            "survey" => $survey
        ], 200);
    }

    public function addSurvey(Request $request){
        $survey = new Survey;
        $survey->title = $request->title;
        $survey->save();

        return response()->json([
            "success" => true,
            "items" => $survey
        ], 200);
    }

}
