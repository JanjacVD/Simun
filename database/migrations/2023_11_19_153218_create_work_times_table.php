<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('work_times', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->time('time_from')->format('H:i');
            $table->time('time_to')->format('H:i');
            $table->string('non_working_days');
            $table->boolean('is_working');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('work_times');
    }
};
