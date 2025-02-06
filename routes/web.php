<?php

use App\Http\Controllers\JobController;
use Illuminate\Support\Facades\Route;


Route::get('/', function () {
    return inertia('Home/Index');
})->name('home');

Route::resource('/jobs', JobController::class);
