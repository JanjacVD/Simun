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
        $request->file('img')->storeAs('allergen-images/', $imgName . '.svg', 'public');
        return parent::handleStore($data);
    }

    public function update(MenuAllergenUpdateRequest $request)
    {
        $uploadedImg = $request->file('img');
        $allergen = MenuAllergen::withTrashed()->findOrFail($request->input('id'));
        $imgName = $allergen->image;
        $newImgName = $request->input('name')['en'] . Str::uuid();
        if ($uploadedImg) {
            if (Storage::disk('public')->exists('allergen-images/' . $imgName . '.svg'))
                Storage::disk('public')->delete('allergen-images/' . $imgName . '.svg');
            $request->file('img')->storeAs('allergen-images/', $newImgName . '.svg', 'public');
        }
        $allergen->update([
            'name' => $request->input('name'),
            'image' => $newImgName
        ]);
        return redirect()->route('menu-allergens.show', $request->input('id'));
    }

    public function forceDelete($id)
    {
        $allergen = MenuAllergen::withTrashed()->findOrFail($id);
        $imgName = $allergen->image;
        if (Storage::disk('public')->exists('allergen-images/' . $imgName . '.svg')) {
            Storage::disk('public')->delete('allergen-images/' . $imgName . '.svg');
        }
        $allergen->forceDelete();
        return redirect()->route('menu-allergens.index');
    }
}
