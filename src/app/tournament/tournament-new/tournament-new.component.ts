import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Tournament } from '../../../shared/model/tournament.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tournament-new',
  templateUrl: './tournament-new.component.html',
  styleUrls: ['./tournament-new.component.css']
})
export class TournamentNewComponent implements OnInit {
  Tournaments$: Observable<Tournament[]>;

  constructor(private tournamentservice: TournamentService) { }

  addTournament(tournamentname: string, matchduration: number,intermission: number,pointswin: number,pointsdraw: number) {
    const newTournament = new Tournament (null,tournamentname, matchduration,intermission,pointswin,pointsdraw);
    this.tournamentservice.addTournaments(newTournament).subscribe();
  }
  ngOnInit() {
    this.Tournaments$ = this.tournamentservice.getTournaments();
  }

}
