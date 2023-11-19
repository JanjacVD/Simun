<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WorkTime extends Model
{
    use HasFactory;

    protected $fillable = [
        'time_from',
        'time_to',
        'is_working',
        "non_working_days"
    ];

    public static function createIfNotExistsUpdateIfDoes(array $attributes)
    {
        $existingRecord = self::first();

        if ($existingRecord) {
            return $existingRecord->update($attributes);
        }
        return self::create($attributes);
    }
}
