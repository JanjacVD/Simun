<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AbstractControllers\MenuController;
use App\Http\Requests\MenuAllergenRequest;
use App\Http\Requests\MenuAllergenUpdateRequest;
use App\Models\MenuAllergen;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class MenuAllergenController extends MenuController
{
    protected function getModelClass(): string
    {
        return MenuAllergen::class;
    }

    protected function getRouteBase(): string
    {
        return 'menu-allergens';
    }

    protected function getSubfolderName(): string
    {
        return 'Allergens';
    }

    public function store(MenuAllergenRequest $request)
    {

        $imgName = $request->input('name')['en'] . Str::uuid();
        $data = [
            'name' => $request->input('name'),
            'image' => $imgName
        ];
        $request->file('img')->storeAs('allergen-images', $imgName . '.svg', 'public');
        return parent::handleStore($data);
    }

    public function update(MenuAllergenUpdateRequest $request)
    {   
        $uploadedImg = $request->file('img');
        dd($request->all()); // Empty Array heere

        $allergen = MenuAllergen::withTrashed()->findOrFail($request->input('id'));
        $imgName = $allergen->image;
        if (Storage::disk('public')->exists('allergen-images/' . $imgName . '.svg')) {
            // dd('Test');
        }
        $allergen->update([
            'name' => $request->input('name'),
            'image' => $imgName
        ]);
        return redirect()->route('menu-allergens.show', $request->input('id'));
    }
}
