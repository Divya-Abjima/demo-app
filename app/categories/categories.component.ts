import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories = [
    {'id' : 1, 'name': 'Action'},
    {'id' : 2, 'name': 'Adventure'},
    {'id' : 3, 'name': 'Fantasy'},
    {'id' : 4, 'name': 'Horror'},
    {'id' : 5, 'name': 'Racing'},
    {'id' : 6, 'name': 'Simulation'},
    {'id' : 7, 'name': 'Time management'},
    {'id' : 8, 'name': 'Fun'},
    {'id' : 9, 'name': 'Board'},
    {'id' : 10, 'name': 'Puzzles'},
    {'id' : 11, 'name': 'Brain teasers'},
    {'id' : 12, 'name': 'Hidden object'},

  ]
  public selectedId:any;
  constructor(private router : Router, private route: ActivatedRoute) { }

  displayGames(value:number) {
    value+=1;
    if(value<=12) {
      this.router.navigate(['game-list', {id:value}], {relativeTo:this.route});
    }
  }
}
