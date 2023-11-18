<?php

namespace App\Http\Controllers;

use App\Http\Controllers\AbstractControllers\MenuController;
use App\Http\Requests\MenuSectionRequest;
use App\Models\MenuSection;

class MenuSectionController extends MenuController
{
    protected function getModelClass(): string
    {
        return MenuSection::class;
    }
    protected function getRouteBase(): string
    {
        return 'menu-sections';
    }
    protected function getSubfolderName(): string
    {
        return 'Sections';
    }

    public function store(MenuSectionRequest $request)
    {
        return parent::handleStore($request->input());
    }

    public function update(MenuSectionRequest $request)
    {
        return parent::handleUpdate($request->input());
    }
}
