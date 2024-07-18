<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MenuSectionResource extends JsonResource
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
            'categories' => MenuCategoryResource::collection($this->whenLoaded('categories')),
            'order' => $this->order
        ];
    }
}
