<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AbstractControllers\MenuController;
use App\Http\Requests\MenuCategoryRequest;
use App\Models\MenuCategory;

class MenuCategoryController extends MenuController
{
    protected function getModelClass(): string
    {
        return MenuCategory::class;
    }
    
    protected function getRouteBase(): string
    {
        return 'menu-categories';
    }

    protected function getSubfolderName(): string
    {
        return 'Categories';
    }
    
    public function store(MenuCategoryRequest $request)
    {
        $data = [
            'name' => $request->input('name'),
            'menu_section_id' => $request->input('parent_id'),
        ];
        return parent::handleStore($data);
    }

    public function update(MenuCategoryRequest $request)
    {
        $data = [
            ...$request->input(),
            'menu_section_id' => $request->input('parent_id'),
        ];
        return parent::handleUpdate($data);
    }
}
