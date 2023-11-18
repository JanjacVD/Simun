<?php

use App\Http\Controllers\MenuAllergenController;
use App\Http\Controllers\MenuCategoryController;
use App\Http\Controllers\MenuItemController;
use App\Http\Controllers\MenuSectionController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth')->group(function () {
    Route::resource('menu-sections', MenuSectionController::class)->withTrashed(['show']);
    Route::post('menu-sections/{menu_section}/restore', [MenuSectionController::class, 'restore'])->name('menu-sections.restore');
    Route::post('menu-sections/{menu_section}/delete', [MenuSectionController::class, 'forceDelete'])->name('menu-sections.forceDelete');
    Route::post('menu-sections/order', [MenuSectionController::class, 'handleOrderChange'])->name('menu-sections.order');

    Route::resource('menu-categories', MenuCategoryController::class)->withTrashed(['show']);
    Route::post('menu-categories/{menu_category}/restore', [MenuCategoryController::class, 'restore'])->name('menu-categories.restore');
    Route::post('menu-categories/{menu_category}/delete', [MenuCategoryController::class, 'forceDelete'])->name('menu-categories.forceDelete');
    Route::post('menu-categories/order', [MenuCategoryController::class, 'handleOrderChange'])->name('menu-categories.order');

    Route::resource('menu-items', MenuItemController::class)->withTrashed(['show']);
    Route::post('menu-items/{menu_item}/restore', [MenuItemController::class, 'restore'])->name('menu-items.restore');
    Route::post('menu-items/{menu_item}/delete', [MenuItemController::class, 'forceDelete'])->name('menu-items.forceDelete');
    Route::post('menu-items/order', [MenuItemController::class, 'handleOrderChange'])->name('menu-items.order');

    Route::resource('menu-allergens', MenuAllergenController::class)->withTrashed(['show'])->except('update');
    Route::post('menu-allergens/{menu_allergen}/restore', [MenuAllergenController::class, 'restore'])->name('menu-allergens.restore');
    Route::post('menu-allergens/{menu_allergen}/delete', [MenuAllergenController::class, 'forceDelete'])->name('menu-allergens.forceDelete');
    Route::post('menu-allergens/order', [MenuAllergenController::class, 'handleOrderChange'])->name('menu-allergens.order');

    Route::post('menu-allergens/{menu_allergen}/update', [MenuAllergenController::class, 'update'])->name('menu-allergens.update');
});
