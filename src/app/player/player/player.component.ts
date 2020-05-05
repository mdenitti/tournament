import { Component, OnInit } from '@angular/core';
import { TournamentService } from 'src/shared/services/tournament.service';
import { Player } from '../../../shared/model/player.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
Players$: Observable<Player[]>;

  constructor(private tournamentservice: TournamentService) { }

  ngOnInit() {
    this.Players$ = this.tournamentservice.getPlayers();
  }
}
