<?php

use App\Http\Controllers\Guest\GuestViewController;
use Illuminate\Support\Facades\Route;

Route::get('/', [GuestViewController::class, 'getWorktimeAndDisplayHome'])->name('homepage');
Route::get('/menu', [GuestViewController::class, 'menu'])->name('menu');
Route::get('/contact', [GuestViewController::class, 'contact'])->name('contact');
Route::get('/gallery', [GuestViewController::class, 'gallery'])->name('gallery');


