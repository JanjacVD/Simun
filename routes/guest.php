<?php

use App\Http\Controllers\Guest\GuestViewController;
use Illuminate\Support\Facades\Route;

Route::get('/', [GuestViewController::class, 'getWorktimeAndDisplayHome'])->name('homepage');
