<?php

namespace App\Http\Controllers;

use App\Tournament;
use Illuminate\Http\Request;

class TournamentController extends Controller
{

    public function showAllTournaments()
    {
        return response()->json(tournament::all());
    }

    public function showOneTournament($id)
    {
        return response()->json(Tournament::find($id));
    }

    public function create(Request $request)
    {
        $tournament = Tournament::create($request->all());

        return response()->json($tournament, 201);
    }

    public function update($id, Request $request)
    {
        $tournament = Tournament::findOrFail($id);
        $tournament->update($request->all());

        return response()->json($tournament, 200);
    }

    public function delete($id)
    {
        Tournament::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}