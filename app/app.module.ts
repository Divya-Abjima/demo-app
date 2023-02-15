import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComps } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { GameListComponent } from './game-list/game-list.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComps,
    HomeComponent,
    GameListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
