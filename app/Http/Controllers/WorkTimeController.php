<?php

namespace App\Http\Controllers;

use App\Http\Requests\WorkTimeRequest;
use App\Models\WorkTime;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WorkTimeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function create()
    {
        $workTime = WorkTime::first();
        return Inertia::render('Worktime/Create', ['current' => $workTime]);
    }

    public function store(WorkTimeRequest $request)
    {
        WorkTime::createIfNotExistsUpdateIfDoes($request->input());
        return redirect()->back();
    }
}
