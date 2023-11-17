<?php

namespace App\Models;

use App\Models\Interfaces\Orderable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Spatie\Translatable\HasTranslations;

class MenuSection extends Model implements Orderable
{
    use HasFactory, HasTranslations, SoftDeletes;

    protected $fillable = ['name', 'order'];
    public $translatable = ['name'];
    public function categories(){
        return $this->hasMany(MenuCateogry::class);
    }
}
