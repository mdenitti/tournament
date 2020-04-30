import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Host } from '@angular/core';
import { TournamentService } from '../shared/services/tournament.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player/player.component';
import { TeamComponent } from './team/team/team.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { HomeComponent } from './home/home.component';
import { TournamentComponent } from './tournament/tournament/tournament.component';
import { TournamentNewComponent } from './tournament/tournament-new/tournament-new.component';
import { TournamentEditComponent } from './tournament/tournament-edit/tournament-edit.component';
import { DivisionComponent } from './division/division/division.component';
import { DivisionNewComponent } from './division/division-new/division-new.component';

const routes: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'home', component: HomeComponent },
{ path: 'division', component: DivisionComponent},
{ path: 'division/:id', component: DivisionComponent},
{ path: 'division-new', component: DivisionNewComponent},
{ path: 'division-new/:id', component: DivisionNewComponent},
{ path: 'tournament', component: TournamentComponent},
{ path: 'tournament/:id', component: TournamentComponent},
{ path: 'tournament-new', component: TournamentNewComponent},
{ path: 'tournament-new/:id', component: TournamentNewComponent},
{ path: 'tournament-edit', component: TournamentNewComponent},
{ path: 'tournament-edit/:id', component: TournamentNewComponent},
{ path: 'team', component: TeamComponent},
{ path: 'team/:id', component: TeamComponent},
{ path: 'player', component: PlayerComponent},
{ path: 'player/:id', component: PlayerComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    TeamComponent,
    HomeComponent,
    TournamentComponent,
    TournamentNewComponent,
    TournamentEditComponent,
    DivisionComponent,
    DivisionNewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TournamentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
