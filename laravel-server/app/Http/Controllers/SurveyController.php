<?php

namespace App\Http\Controllers;

use App\Models\Survey;
use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function getSurvey(){
        $survey = Survey::all();
        return response()->json([
            "success" => true,
            "items" => $survey
        ], 200);
    }

    
}
