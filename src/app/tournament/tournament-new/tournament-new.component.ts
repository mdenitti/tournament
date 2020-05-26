import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Tournament } from '../../../shared/model/tournament.model';
import { Observable } from 'rxjs';
import { Referee } from 'src/shared/model/referee.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tournament-new',
  templateUrl: './tournament-new.component.html',
  styleUrls: ['./tournament-new.component.css']
})
export class TournamentNewComponent implements OnInit {
  Tournaments$: Observable<Tournament[]>;
  Referees$: Observable<Referee[]>;

  constructor(private router: Router, private route: ActivatedRoute, private tournamentservice: TournamentService) { }

  addTournament(tournamentname: string, matchduration: number,intermission: number,pointswin: number,pointsdraw: number, refid:number) {
    const newTournament = new Tournament (null,tournamentname, matchduration,intermission,pointswin,pointsdraw,refid);
    this.tournamentservice.addTournaments(newTournament).subscribe(
      result => { this.tournamentservice.getTournaments() }
    );
    this.router.navigate(['home']);
  }
  ngOnInit() {
    this.Tournaments$ = this.tournamentservice.getTournaments();
    this.Referees$ = this.tournamentservice.getReferee();
  }

}
