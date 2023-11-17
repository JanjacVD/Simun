<?php

namespace App\Models\Interfaces;

interface Orderable
{
    public static function all();
    public function update(array $attributes = [], array $options = []);
}