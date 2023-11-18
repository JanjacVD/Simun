<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AbstractControllers\MenuController;
use App\Http\Requests\MenuItemRequest;
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
            ...$request->input(),
            'menu_category_id' => $request->input('parent_id'),
        ];
        return parent::handleStore($data);
    }

    public function update(MenuItemRequest $request)
    {
        $data = [
            ...$request->input(),
            'menu_category_id' => $request->input('parent_id'),
        ];
        dd($data);
        return parent::handleUpdate($data);
    }
}
