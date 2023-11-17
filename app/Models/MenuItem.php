<?php

namespace App\Models;

use App\Models\Interfaces\Orderable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class MenuItem extends Model implements Orderable
{
    use HasFactory;
}
