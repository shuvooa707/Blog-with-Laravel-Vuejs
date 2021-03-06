<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get( '/', function () {
    return view( 'public.index' );
} );

Auth::routes();

Route::get( '/home', 'HomeController@index' )->name( 'home' );

Route::get( '/{anypath}', 'HomeController@index' )->where( 'path', '.*' ); // it should be in this position to work

Route::group( ['middleware' => 'auth', 'namespace' => 'Admin', 'as' => 'admin.', 'prefix' => 'api'], function () {
    Route::resource( 'category', 'CategoryController' );
    Route::delete( 'delete-selected-category/{categoryItem}', 'CategoryController@deleteSelected' );
    Route::resource( 'post', 'PostController' );
} );

// Frontend Route
Route::group( ['prefix' => 'public'], function () {
    Route::get( 'blog', 'BlogController@index' );
    Route::get( 'blog/{id}', 'BlogController@show' );
    Route::get( 'latestPosts', 'BlogController@latestPosts' );
    Route::get( 'search', 'BlogController@search' );
    Route::get( 'category', 'CategoryController@index' );
    Route::get( 'category/{id}', 'CategoryController@show' );
} );
