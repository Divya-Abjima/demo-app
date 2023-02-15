import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LatestComponent } from './latest/latest.component';
import { CategoriesComponent } from './categories/categories.component';
import { GameListComponent } from './game-list/game-list.component';
import { PopularComponent } from './popular/popular.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'popular', component: PopularComponent },
  {
    path: 'categories',
    component: CategoriesComponent,
    children : [
      { path: 'game-list', component: GameListComponent }
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
  GameListComponent,
  PopularComponent,
  ErrorpageComponent ]
