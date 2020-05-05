<?php

namespace App\Http\Controllers;

use App\Referee;
use Illuminate\Http\Request;

class RefereeController extends Controller
{

    public function showAllReferees()
    {
        return response()->json(referee::all());
    }

    public function showOneReferee($id)
    {
        return response()->json(referee::find($id));
    }

    public function create(Request $request)
    {
        $referee = Referee::create($request->all());

        return response()->json($referee, 201);
    }

    public function update($id, Request $request)
    {
        $referee = Referee::findOrFail($id);
        $referee->update($request->all());

        return response()->json($referee, 200);
    }

    public function delete($id)
    {
        Referee::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}