<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MenuItemRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name.en' => 'required|string',
            'name.hr' => 'required|string',
            'description.hr' => 'required|string',
            'description.en' => 'required|string',
            'parent_id' => 'required|integer',
            'price' => 'required|decimal:0,2',
        ];
    }
}
