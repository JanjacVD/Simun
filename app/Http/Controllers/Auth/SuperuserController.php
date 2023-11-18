<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class SuperuserController extends Controller
{
    public function getUserList()
    {
        return Inertia::render('Auth/Userlist', ['userList' => User::all()->except(Auth::id())]);
    }

    public function destroyUser(User $user)
    {
        $user->forceDelete();
        return redirect()->back();
    }
}
