import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComps } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';
import { ActionComponent } from './action/action.component';
import { AdventureComponent } from './adventure/adventure.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { HorrorComponent } from './horror/horror.component';
import { RacingComponent } from './racing/racing.component';
import { SimulationComponent } from './simulation/simulation.component';
import { TimeManagementComponent } from './time-management/time-management.component';
import { FunComponent } from './fun/fun.component';
import { BoardComponent } from './board/board.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { BrainTeasersComponent } from './brain-teasers/brain-teasers.component';
import { HiddenObjectComponent } from './hidden-object/hidden-object.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComps,
    HomeComponent,
    GameListComponent,
    ActionComponent,
    AdventureComponent,
    FantasyComponent,
    HorrorComponent,
    RacingComponent,
    SimulationComponent,
    TimeManagementComponent,
    FunComponent,
    BoardComponent,
    PuzzleComponent,
    BrainTeasersComponent,
    HiddenObjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
