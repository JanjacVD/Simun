<?php

namespace App\Models;

use App\Models\Interfaces\Orderable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class MenuCategory extends Model implements Orderable
{
    use HasFactory, HasTranslations, SoftDeletes;

    protected $fillable = ['name', 'order', 'menu_section_id'];
    public $translatable = ['name'];

    public function section(){
        return $this->belongsTo(MenuSection::class);
    }

    public function items(){
        return $this->belongsTo(MenuItems::class);
    }
}
