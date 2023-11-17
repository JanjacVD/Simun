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
        Schema::create('menu_item_allergen', function (Blueprint $table) {
            $table->id();
            $table->timestamps();

            $table->unsignedBigInteger('menu_item_id');
            $table->unsignedBigInteger('menu_allergen_id');

            $table->foreign('menu_item_id')->references('id')->on('menu_items')->onDelete('cascade');
            $table->foreign('menu_allergen_id')->references('id')->on('menu_allergens')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('menu_item_allergen');
    }
};
