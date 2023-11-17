<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AbstractControllers\MenuController;
use App\Http\Requests\MenuSectionRequest;
use App\Models\MenuSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuSectionController extends MenuController
{
    protected function getModelClass(): string
    {
        return MenuSection::class;
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Menu/Sections/Index', [
            "sectionList" => MenuSection::withTrashed()->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Menu/Sections/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(MenuSectionRequest $request)
    {
        MenuSection::create(['name' => $request->name, 'order' => MenuSection::count() + 1]);
        return redirect()->back()->with([
            'status' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        return Inertia::render('Menu/Sections/Show', ['section' => MenuSection::withTrashed()->findOrFail($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        return Inertia::render('Menu/Sections/Edit', ['section' => MenuSection::withTrashed()->findOrFail($id)]);
        
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, MenuSection $menuSection)
    {
        $menuSection->update($request->only('name'));
        return redirect()->route('menu-sections.show', $menuSection);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(MenuSection $menuSection)
    {
        $menuSection->delete();
        return redirect()->back();
    }

    public function restore($id){
        MenuSection::withTrashed()->findOrFail($id)->restore();
        return redirect()->back();
    }

    public function forceDelete($id){
        MenuSection::withTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route('menu-sections.index');
    }
}
