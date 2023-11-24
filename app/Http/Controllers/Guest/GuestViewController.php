<?php

namespace App\Http\Controllers\Guest;

use App\Http\Controllers\Controller;
use App\Models\NonWorkingDates;
use App\Models\WorkTime;
use Illuminate\Http\Request;
use Inertia\Inertia;

class GuestViewController extends Controller
{
    public function getWorktimeAndDisplayHome()
    {
        return Inertia::render('Guest/Home/Homepage', [
            "worktime" => WorkTime::first([
                "is_working",
                "non_working_days",
                "time_from",
                "time_to"
            ]),
            "non_working_dates" => NonWorkingDates::all(['non_working_date']),
        ]);
    }
    public function menu()
    {
        return Inertia::render('Guest/Menu/Menu', []);
    }
    public function contact()
    {
        return Inertia::render('Guest/Menu/Menu', []);
    }
    public function gallery()
    {
        return Inertia::render('Guest/Menu/Menu', []);
    }
}
