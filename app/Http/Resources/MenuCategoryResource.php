<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MenuCategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $locale = session()->get('locale');
        return [
            'name' => $this->getTranslation('name', $locale),
            'items' => MenuItemResource::collection($this->whenLoaded('items')),
            'order' => $this->order
        ];
    }
}
