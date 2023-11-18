<?php

namespace App\Models;

use App\Models\Interfaces\Orderable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class MenuItem extends Model implements Orderable
{
    use HasFactory, HasTranslations, SoftDeletes;

    protected $fillable = ['name', 'order', "menu_category_id", "description", "price"];
    public $translatable = ['name', "description"];

    public function items(){
        return $this->belongsTo(MenuItems::class);
    }

    public function allergens()
    {
        return $this->belongsToMany(MenuAllergen::class, 'menu_item_allergen');
    }
}
