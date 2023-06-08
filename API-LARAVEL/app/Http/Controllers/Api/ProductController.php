<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $products =  Product::all();
      return $products;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
     $product = Product::create([
       'descripcion' => $request->descripcion,
       'price' => $request->price,
       'stock' => $request->stock
     ]);

     return $product;

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $product = Product::find($id);
        return $product;

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $product = Product::findOrFail($request->id)
        ->update([
            'descripcion' => $request->descripcion,
            'price' => $request->price,
            'stock' => $request->stock
        ]);

        return $product;

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       $product = Product::destroy($id);
       return $product;
    }
}
