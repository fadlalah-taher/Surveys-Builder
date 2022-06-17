<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\JWTController;

Route::group(['prefix' => 'v1'], function(){
    Route::group(['middleware' => 'api'], function($router) {
        Route::post('/register', [JWTController::class, 'register']);
        Route::post('/login', [JWTController::class, 'login']);
        Route::post('/logout', [JWTController::class, 'logout']);
        Route::post('/refresh', [JWTController::class, 'refresh']);
        Route::post('/profile', [JWTController::class, 'profile']);
    });

    Route::group(['prefix' => 'admin'], function(){
        Route::post('/addsurvey', [SurveyController::class, 'addsurvey']);
        Route::post('/addtype', [TypeController::class, 'addtype']);
        Route::post('/addoption', [OptionController::class, 'addoption']);
    });

});
