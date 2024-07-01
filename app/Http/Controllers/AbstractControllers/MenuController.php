<?php

namespace App\Http\Controllers\AbstractControllers;

use App\Http\Controllers\Controller;
use App\Models\MenuAllergen;
use App\Models\MenuCategory;
use App\Models\MenuSection;
use Illuminate\Http\Request;
use Inertia\Inertia;

abstract class MenuController extends Controller
{
    protected $modelClass;
    protected $subfolderName;
    protected $routeBase;
    abstract protected function getModelClass(): string;
    abstract protected function getSubfolderName(): string;
    abstract protected function getRouteBase(): string;
    public function __construct()
    {
        $this->modelClass = $this->getModelClass();
        $this->subfolderName = $this->getSubfolderName();
        $this->routeBase = $this->getRouteBase();
    }

    protected function handleOrderChange(Request $request)
    {
        $data = $request->input('data');
        foreach ($data as $item) {
            $this->modelClass::where('id', $item['id'])->update(['order' => $item['order']]);
        }
        return redirect()->back();
    }

    public function index(Request $request)
    {
        $query = $this->modelClass::withTrashed();
        if ($request->section_id)
            $query = $query->where('menu_section_id', $request->section_id);
        if ($request->category_id)
            $query = $query->where('menu_category_id', $request->category_id);
        return Inertia::render('Menu/' . $this->subfolderName . '/Index', [
            "items" => $query->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $props = [];
        if ($this->subfolderName === "Categories")
            $props = ['parentResult' => MenuSection::all(['id', 'name'])];
        elseif ($this->subfolderName === "Items")
            $props = ['parentResult' => MenuCategory::all(['id', 'name']), 'allergens' => MenuAllergen::all(['id', 'name'])];
        return Inertia::render('Menu/' . $this->subfolderName . '/Create', $props);
    }

    /**
     * Store a newly created resource in storage.
     */
    protected function handleStore(array $data)
    {
        $model = $this->getModelClass()::create(array_merge($data, ['order' => $this->modelClass::count() + 1]));
        if ($this->subfolderName === "Items")
            return $model;
        return redirect()->back()->with([
            'status' => 'success',
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $query = $this->modelClass::withTrashed();
        $this->subfolderName === 'Items' && ($query = $query->with('allergens'));
        return Inertia::render('Menu/' . $this->subfolderName . '/Show', ['items' => $query->findOrFail($id)]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $query = $this->modelClass::withTrashed();
        $this->subfolderName === "Items" && ($query = $query->with('allergens'));
        $props = ['items' => $query->findOrFail($id)];
        if ($this->subfolderName === "Categories")
            $props = array_merge($props, ['parentResult' => MenuSection::all(['id', 'name'])]);
        if ($this->subfolderName === "Items")
            $props = array_merge($props, ['parentResult' => MenuCategory::all(['id', 'name']), 'allergens' => MenuAllergen::all(['id', 'name'])]);
        return Inertia::render('Menu/' . $this->subfolderName . '/Edit', $props);
    }

    /**
     * Update the specified resource in storage.
     */
    protected function handleUpdate(array $data)
    {
        $model = $this->modelClass::withTrashed()->findOrFail($data['id']);
        dd($model);
        // update($data);
        if ($this->subfolderName === "Items")
            return $model;
        return redirect()->route($this->routeBase . '.show', $data['id']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($model)
    {
        $this->modelClass::findOrFail($model)->delete($model);
        return redirect()->back();
    }

    public function restore($id)
    {
        $this->modelClass::withTrashed()->findOrFail($id)->restore();
        return redirect()->back();
    }

    public function forceDelete($id)
    {
        $this->modelClass::withTrashed()->findOrFail($id)->forceDelete();
        return redirect()->route($this->routeBase . '.index');
    }
}
