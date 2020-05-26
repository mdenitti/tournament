import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Division } from '../model/division.model';
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

  // #############################
  // ### set URL's             ###
  // #############################
  urlRoot = 'http://localhost:8000/public/api/';

  // #############################
  // ### GET methodes          ###
  // #############################
  getTournaments(): Observable<Tournament[]> {
    return this.http
      .get<Tournament[]>(this.urlRoot + 'tournaments')
      .pipe(tap(res => console.log(res)));
  }
  getDivisions(): Observable<Division[]> {
    return this.http
      .get<Division[]>(this.urlRoot + 'divisions')
      .pipe(tap(res => console.log(res)));
  }
  getPlayers(): Observable<Player[]> {
    return this.http
      .get<Player[]>(this.urlRoot + 'players')
      .pipe(tap(res => console.log(res)));
  }
  getTeams(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.urlRoot + 'teams')
      .pipe(tap(res => console.log(res)));
  }

  //Massimo
  getReferee(): Observable<Team[]> {
    return this.http
      .get<Team[]>(this.urlRoot + 'referees')
      .pipe(tap(res => console.log(res)));
  }

  // #############################
  // ### INSERT methodes       ###
  // #############################
  addTournaments(newTournament: Tournament): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(newTournament);
    return this.http.post(this.urlRoot + 'tournament', newTournament, { headers: headers });
  }
  addDivisions(newDivision: Division): Observable<any> {
    const headers = new HttpHeaders().set('Content-type', 'application/json');
    console.log(newDivision);
    return this.http.post(this.urlRoot + 'division', newDivision, { headers: headers });
  }

  // #############################
  // ### PUT methodes          ###
  // #############################


  // #############################
  // ### DELETE methodes       ###
  // #############################
  deleteTournament(value) {
    return this.http.delete(this.urlRoot + 'tournament' + `/${value}`);
  }
  deleteDivision(value) {
    return this.http.delete(this.urlRoot + 'division' + `/${value}`);
  }
}
