import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestComponent } from './latest/latest.component';
import { CategoriesComponent } from './categories/categories.component';
import { GameListComponent } from './game-list/game-list.component';
import { PopularComponent } from './popular/popular.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { ActionComponent } from './action/action.component';
import { AdventureComponent } from './adventure/adventure.component';
import { BoardComponent } from './board/board.component';
import { BrainTeasersComponent } from './brain-teasers/brain-teasers.component';
import { FantasyComponent } from './fantasy/fantasy.component';
import { FunComponent } from './fun/fun.component';
import { HiddenObjectComponent } from './hidden-object/hidden-object.component';
import { HorrorComponent } from './horror/horror.component';
import { PuzzleComponent } from './puzzle/puzzle.component';
import { RacingComponent } from './racing/racing.component';
import { SimulationComponent } from './simulation/simulation.component';
import { TimeManagementComponent } from './time-management/time-management.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'popular', component: PopularComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    children : [
      { path: 'games-list', component: GameListComponent },
      { path: 'action', component: ActionComponent},
      { path: 'adventure', component: AdventureComponent},
      { path: 'board', component: BoardComponent },
      { path: 'brain-teaser', component: BrainTeasersComponent},
      { path: 'fantasy', component: FantasyComponent},
      { path: 'fun', component: FunComponent },
      { path: 'horror', component: HorrorComponent},
      { path: 'puzzle', component: PuzzleComponent},
      { path: 'racing', component: RacingComponent },
      { path: 'simulation', component: SimulationComponent},
      { path: 'time-management', component: TimeManagementComponent},
      { path: 'hidden-object', component:HiddenObjectComponent}
    ]
  },
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComps = [HomeComponent,
  LatestComponent,
  CategoriesComponent,
  ActionComponent,
  AdventureComponent,
  BoardComponent,
  BrainTeasersComponent,
  FantasyComponent,
  FunComponent,
  HorrorComponent,
  PuzzleComponent,
  RacingComponent,
  SimulationComponent,
  TimeManagementComponent,
  GameListComponent,
  PopularComponent,
  ErrorpageComponent ]
