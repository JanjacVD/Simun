<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AbstractControllers\MenuController;
use App\Http\Requests\MenuItemRequest;
use App\Models\MenuAllergen;
use App\Models\MenuItem;

class MenuItemController extends MenuController
{
    protected function getModelClass(): string
    {
        return MenuItem::class;
    }

    protected function getRouteBase(): string
    {
        return 'menu-items';
    }

    protected function getSubfolderName(): string
    {
        return 'Items';
    }

    public function store(MenuItemRequest $request)
    {
        $data = [
            ...$request->except('allergens'),
            'menu_category_id' => $request->input('parent_id'),
        ];
        $allergenIids = array_map(function ($item) {
            return $item['value'];
        }, $request->input('allergens'));
        $item = parent::handleStore($data);
        $item->allergens()->sync($allergenIids);
        return redirect()->back()->with([
            'status' => 'success',
        ]);
    }

    public function update(MenuItemRequest $request)
    {
        $data = [
            ...$request->input(),
            'menu_category_id' => $request->input('parent_id'),
        ];
        $item = parent::handleUpdate($data);
        $allergenIids = array_map(function ($item) {
            return $item['value'];
        }, $request->input('allergens'));
        $item->allergens()->sync($allergenIids);
        return redirect()->route('menu-items.show', $data['id']);
    }
}
