<?php

use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\Auth\SuperuserController;
use App\Http\Controllers\NonWorkingDatesController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WorkTimeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('locale/{locale}', function (string $locale) {
    if (!in_array($locale, ['en', 'hr'])) {
        abort(400, "Unspported Language");
    }
    session()->put('locale', $locale);
    App::setLocale($locale);
    return redirect()->back();
})->name('locale');
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('worktime', WorkTimeController::class)->only(['store', 'create']);
    Route::resource('non-working-dates', NonWorkingDatesController::class)->only(['index', 'create', 'store', 'destroy']);
});

Route::middleware(['auth', 'superuser'])->group(function () {

    Route::post('register', [RegisteredUserController::class, 'store']);

    Route::get('register', [RegisteredUserController::class, 'create'])
        ->name('register');

    Route::get('user-list', [SuperuserController::class, 'getUserList'])->name('user.list');

    Route::delete('user-delete/{user}', [SuperuserController::class, 'destroyUser'])->name('user.delete');
});

require __DIR__ . '/auth.php';
require __DIR__ . '/menu.php';
require __DIR__ . '/guest.php';
