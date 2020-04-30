import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  Teams$: Observable<any[]>;

  constructor(private tournamentservice: TournamentService) { }

  ngOnInit() {
    this.Teams$ = this.tournamentservice.getTeams();
  }
}
