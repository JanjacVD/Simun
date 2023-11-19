<?php

namespace App\Http\Controllers;

use App\Http\Requests\NonWorkingDatesRequest;
use App\Models\NonWorkingDates;
use Illuminate\Http\Request;
use Inertia\Inertia;

class NonWorkingDatesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('NonWorkingDates/Index', ['data' => NonWorkingDates::all(['id', 'non_working_date'])]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('NonWorkingDates/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NonWorkingDatesRequest $request)
    {
        NonWorkingDates::create($request->input());
        return redirect()->back();
    }

    public function destroy($id)
    {
        NonWorkingDates::findOrFail($id)->delete();
        return redirect()->back();
    }
}
