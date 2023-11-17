<?php

namespace App\Http\Controllers\AbstractControllers;

use App\Http\Controllers\Controller;
use App\Models\Interfaces\Orderable;
use Illuminate\Http\Request;

abstract class MenuController extends Controller

{
    protected $modelClass;
    abstract protected function getModelClass(): string;

    public function __construct()
    {
        $this->modelClass = $this->getModelClass();
    }

    protected function handleOrderChange(Request $request)
    {
        $data = $request->input('data');
        foreach ($data as $item) {
            $this->modelClass::where('id', $item['id'])->update(['order' => $item['order']]);
        }
        return redirect()->back();
    }
}
