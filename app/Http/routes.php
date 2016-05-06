<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('welcome');
});

//CRUD
//Route::get('/customers', [ 'as' => 'customers', 'uses' =>'customerController@index']);

Route::get('/customers/{id?}', 'customerController@index');
Route::post('/customers', 'customerController@store');
Route::post('/customers/{id}', 'customerController@update');
Route::delete('/customers/{id}', 'customerController@destroy');
