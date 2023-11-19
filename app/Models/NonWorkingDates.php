<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class NonWorkingDates extends Model
{
    use HasFactory;

    protected $fillable = [
        "non_working_date"
    ];

    public static function deleteOldEntries()
    {
        self::where('non_working_date', '<', Carbon::yesterday())->delete();
    }
}
