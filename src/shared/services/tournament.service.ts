import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tournament } from '../model/tournament.model';
import { Team } from '../model/team.model';
import { Player } from '../model/player.model';
import { Observable, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TournamentService {
  constructor(private http: HttpClient) {}
  urlRoot = 'http://localhost/tournament/public/api/';
  urlTournaments = this.urlRoot + 'tournaments';
  urlTournament = this.urlRoot + 'tournament';

  urlGetPlayers = this.urlRoot + 'players';

  urlGetTeams = this.urlRoot + 'teams';

  getTournaments(): Observable<Tournament[]> {
    return this.http
      .get<Tournament[]>(this.urlTournaments)
      .pipe(tap(res => console.log(res)));
  }
  addTournaments(newTournament: Tournament): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(newTournament);
    return this.http.post(this.urlTournament, newTournament, { headers: headers });
  }
  getPlayers(): Observable<Player[]> {
    return this.http
      .get<Player[]>(this.urlGetPlayers)
      .pipe(tap(res => console.log(res)));
  }

  getTeams(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.urlGetTeams)
      .pipe(tap(res => console.log(res)));
  }

  deleteTournament(value) {
    return this.http.delete(this.urlTournament + `/${value}`);
  }  
}
